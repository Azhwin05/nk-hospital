'use client'

function StomachSVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="14" y1="3" x2="14" y2="5.5" />
      <path d="M14 5.5C12 5.5 9 7 8 10C7 13 7.5 16 9 18C10.5 20 13 21 15.5 20C18 19 19.5 17 19.5 14.5C19.5 12 18 9.5 16.5 8C15.5 7 15 6 14.5 5.5Z" />
    </svg>
  )
}

function ScalpelSVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
      <path d="M4 20L14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 10L20 5L17 8.5Z" fill="currentColor" />
    </svg>
  )
}

function KidneySVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 C8 3 4 6 4 12 C4 18 8 21 12 21 C14 21 15.5 19 15.5 17 C15.5 15.5 14 14 14 12 C14 10 15.5 8.5 15.5 7 C15.5 5 14 3 12 3 Z" />
      <path d="M13 8 C11.5 9 11.5 10 11.5 12 C11.5 14 11.5 15 13 16" />
    </svg>
  )
}

function IntestineSVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 5 C3 5 3 10 7 10 C11 10 11 5 15 5 C19 5 19 10 15 10 C11 10 11 15 15 15 C19 15 19 19 15 19 C11 19 11 15 7 15 C4 15 4 19 7 19" />
    </svg>
  )
}

function LungsSVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="12" y1="7" x2="8" y2="9" />
      <line x1="12" y1="7" x2="16" y2="9" />
      <path d="M8 9 C4 9 3 12 3 15 C3 18 5 20 8 20 C10 20 12 18 12 16 L12 9" />
      <path d="M16 9 C20 9 21 12 21 15 C21 18 19 20 16 20 C14 20 12 18 12 16 L12 9" />
    </svg>
  )
}

export function IconRender({ icon, className = '' }) {
  if (icon === 'svg:stomach') return <span className={`inline-flex items-center justify-center ${className}`}><StomachSVG /></span>
  if (icon === 'svg:scalpel') return <span className={`inline-flex items-center justify-center ${className}`}><ScalpelSVG /></span>
  if (icon === 'svg:kidney') return <span className={`inline-flex items-center justify-center ${className}`}><KidneySVG /></span>
  if (icon === 'svg:intestine') return <span className={`inline-flex items-center justify-center ${className}`}><IntestineSVG /></span>
  if (icon === 'svg:lungs') return <span className={`inline-flex items-center justify-center ${className}`}><LungsSVG /></span>
  return <i className={`${icon} ${className}`}></i>
}
