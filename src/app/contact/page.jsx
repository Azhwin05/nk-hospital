'use client'
import { useState } from 'react'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }) }, 3000)
  }

  const infoCards = [
    { icon: 'ph-fill ph-map-pin', titleKey: 'contact_address_title', lines: ['NK Nagar, opposite Shor Gumbad,', 'Jaferabad, Kalaburagi,', 'Karnataka 585103'] },
    { icon: 'ph-fill ph-phone', titleKey: 'contact_phone_title', lines: [
        <a key="p1" href="tel:9353957095" className="hover:text-[#1a3a6b] transition-colors">9353957095 (Ambulance)</a>,
        <a key="p2" href="tel:9187966774" className="hover:text-[#1a3a6b] transition-colors">9187966774 (Ambulance)</a>,
        <a key="p3" href="tel:9901573323" className="hover:text-[#1a3a6b] transition-colors">9901573323 (Consultation)</a>,
    ]},
    { icon: 'ph-fill ph-envelope', titleKey: 'contact_email_title', lines: [
        <a key="e2" href="mailto:hr@nkhospital.com" className="hover:text-[#1a3a6b] transition-colors">hr@nkhospital.com</a>,
        <a key="e3" href="mailto:nkhospitalglb@gmail.com" className="hover:text-[#1a3a6b] transition-colors">nkhospitalglb@gmail.com</a>,
    ]},
    { icon: 'ph-fill ph-clock', titleKey: 'contact_hours_title', lines: ['Mon – Sat: 8:00 AM – 8:00 PM', 'Emergency: 24/7'] },
  ]

  return (
    <div className="antialiased bg-slate-50 text-gray-800 min-h-screen flex flex-col">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1a3a6b, #1a3054)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{t('contact_heading')}</h1>
          <p className="text-xs md:text-sm text-blue-200/90 font-medium">{t('contact_sub')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 flex items-center text-xs font-semibold text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-[#1a3a6b] text-gray-400">
            <i className="ph ph-house text-sm"></i> {t('common_home')}
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span style={{ color: '#1a3a6b' }}>{t('contact_heading')}</span>
        </div>
      </div>

      <main className="max-w-[1920px] mx-auto px-4 lg:px-16 py-14 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="space-y-5">
            {infoCards.map(({ icon, titleKey, lines }) => (
              <div key={titleKey} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg" style={{ backgroundColor: '#eaf1fb', color: '#1a3a6b' }}>
                  <i className={icon}></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{t(titleKey)}</h4>
                  {lines.map((l, i) => <p key={i} className="text-sm font-medium text-gray-700">{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold mb-1" style={{ color: '#1a3a6b' }}>{t('contact_form_send')}</h2>
            <p className="text-xs text-gray-400 mb-6">Our team will get back to you within 24 hours.</p>

            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500 text-3xl">
                  <i className="ph-fill ph-check-circle"></i>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{t('contact_success_title')}</h3>
                <p className="text-sm text-gray-500">{t('contact_form_success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('contact_form_name')} *</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors" placeholder={t('contact_form_name')} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('contact_form_phone')} *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('contact_form_email')}</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('contact_form_subject')} *</label>
                  <input required type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">{t('contact_form_msg')} *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a3a6b] transition-colors resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="text-white px-8 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ backgroundColor: '#1a3a6b' }}>
                  <i className="ph ph-paper-plane-tilt"></i> {t('contact_form_send')}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-72">
          <iframe
            title="NK Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4!2d76.819!3d17.329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzQ0LjQiTiA3NsKwNDknMDguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}
