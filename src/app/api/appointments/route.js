import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { normalizePhone, sendConfirmationSms } from '@/lib/msg91'
import { rateLimit, clientIp } from '@/lib/rateLimit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const clean = (v, max) => String(v ?? '').trim().slice(0, max)

function prettyDate(iso) {
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export async function POST(req) {
  if (!supabase) {
    return NextResponse.json({ error: 'Booking is temporarily unavailable.' }, { status: 503 })
  }

  let body
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }

  const mobile = normalizePhone(body?.phone)
  if (!mobile) return NextResponse.json({ error: 'Please enter a valid mobile number' }, { status: 400 })

  // No phone verification step — the number is taken as given, so the rate
  // limits below are the only thing standing between us and spam bookings.
  const limited = rateLimit(`book:${mobile}`, { limit: 6, windowMs: 60 * 60 * 1000 })
  if (!limited.allowed) {
    return NextResponse.json({ error: 'Too many bookings from this number. Please call us instead.' }, { status: 429 })
  }
  rateLimit(`book:ip:${clientIp(req)}`, { limit: 20, windowMs: 60 * 60 * 1000 })

  const patientName = clean(body?.name, 120)
  const date = clean(body?.date, 10)
  const slot = clean(body?.slot, 40)
  const message = clean(body?.message, 500)

  if (!patientName || !date || !slot) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: 'Please choose a valid date.' }, { status: 400 })
  }
  const today = new Date(); today.setHours(0, 0, 0, 0)
  if (new Date(`${date}T00:00:00`) < today) {
    return NextResponse.json({ error: 'Please choose a date that is not in the past.' }, { status: 400 })
  }

  // Doctor details come from the DB, not the client, so the stored record
  // always matches a real doctor and a slot they actually offer.
  const { data: doctor, error: doctorError } = await supabase
    .from('doctors').select('*').eq('id', body?.doctor_id).single()

  if (doctorError || !doctor) {
    return NextResponse.json({ error: 'That doctor is no longer available.' }, { status: 400 })
  }
  if (Array.isArray(doctor.available_slots) && !doctor.available_slots.includes(slot)) {
    return NextResponse.json({ error: 'That time slot is no longer available.' }, { status: 400 })
  }

  const { data: appointment, error } = await supabase.from('appointments').insert({
    patient_name: patientName,
    phone: clean(body?.phone, 20),
    doctor_id: doctor.id,
    doctor_name: doctor.name,
    specialty: doctor.specialty,
    date,
    time_slot: slot,
    message: message || null,
  }).select().single()

  if (error) {
    console.error('appointment insert failed', error)
    return NextResponse.json({ error: 'Could not save your appointment. Please try again.' }, { status: 500 })
  }

  // Confirmation SMS is best-effort — the appointment is already booked, so a
  // messaging failure must not read as a booking failure to the patient.
  let smsSent = false
  try {
    const result = await sendConfirmationSms(mobile, {
      name: patientName,
      doctor: doctor.name,
      date: prettyDate(date),
      time: slot,
      hospital: process.env.NEXT_PUBLIC_HOSPITAL_NAME || 'NK Hospital',
    })
    smsSent = !!result.ok
    if (!result.ok && !result.skipped) console.error('confirmation SMS failed', result.data)
  } catch (err) {
    console.error('confirmation SMS error', err)
  }

  return NextResponse.json({ success: true, id: appointment?.id, smsSent })
}
