// Server-only MSG91 client. Never import this from a 'use client' file —
// it reads MSG91_AUTHKEY, which must never reach the browser.

const BASE = 'https://control.msg91.com/api/v5'

const authkey = () => process.env.MSG91_AUTHKEY

/**
 * MSG91 wants a bare country-code + number (e.g. 919876543210).
 * Accepts "+91 98765 43210", "09876543210", "9876543210", etc.
 */
export function normalizePhone(raw) {
  const digits = String(raw || '').replace(/\D/g, '')
  if (!digits) return null
  if (digits.length === 10) return `91${digits}`
  if (digits.length === 11 && digits.startsWith('0')) return `91${digits.slice(1)}`
  if (digits.length === 12 && digits.startsWith('91')) return digits
  // Already has some other country code — pass through if it looks sane.
  if (digits.length >= 11 && digits.length <= 15) return digits
  return null
}

async function call(path, { method = 'GET', query = {}, body, headers = {} } = {}) {
  const key = authkey()
  if (!key) throw new Error('MSG91_AUTHKEY is not configured')

  const url = new URL(`${BASE}${path}`)
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v))
  }

  const res = await fetch(url, {
    method,
    headers: { authkey: key, 'Content-Type': 'application/json', ...headers },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  let data
  const text = await res.text()
  try { data = JSON.parse(text) } catch { data = { message: text } }

  // MSG91 returns HTTP 200 with { type: 'error' } for business failures,
  // so both the status code and the body have to be checked.
  const ok = res.ok && data?.type !== 'error'
  return { ok, status: res.status, data }
}

/**
 * POST /flow — transactional SMS (the appointment confirmation).
 * The variable names below must match the ##VAR## placeholders in the
 * DLT-approved flow template referenced by MSG91_CONFIRM_TEMPLATE_ID.
 */
export async function sendConfirmationSms(mobile, vars) {
  const templateId = process.env.MSG91_CONFIRM_TEMPLATE_ID
  if (!templateId) return { ok: false, skipped: true, reason: 'no confirm template configured' }

  return call('/flow', {
    method: 'POST',
    body: {
      template_id: templateId,
      short_url: '0',
      recipients: [{ mobiles: mobile, ...vars }],
    },
  })
}
