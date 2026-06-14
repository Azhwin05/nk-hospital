'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import en from '@/i18n/en'
import kn from '@/i18n/kn'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('nk_lang') || 'en'
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => {
    const next = lang === 'en' ? 'kn' : 'en'
    setLang(next)
    localStorage.setItem('nk_lang', next)
  }

  const t = (key) => {
    const dict = lang === 'kn' ? kn : en
    return dict[key] !== undefined ? dict[key] : (en[key] !== undefined ? en[key] : key)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
