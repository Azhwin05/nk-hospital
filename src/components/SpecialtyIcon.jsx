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

function LungsSVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v10" />
      <path d="M12 8C10 8 7 9 6 11C5 13 5 15 6 17C7 19 9 20 11 19.5" />
      <path d="M12 8C14 8 17 9 18 11C19 13 19 15 18 17C17 19 15 20 13 19.5" />
      <path d="M9 14C9 14 9.5 16 11 17" />
      <path d="M15 14C15 14 14.5 16 13 17" />
    </svg>
  )
}

function NeurosurgerySVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3C6.5 3 4 5 4 8C4 10 5 11.5 6.5 12.5C6.5 14.5 7.5 16 9 17H15C16.5 16 17.5 14.5 17.5 12.5C19 11.5 20 10 20 8C20 5 17.5 3 15 3C13.5 3 12.5 3.5 12 4C11.5 3.5 10.5 3 9 3Z" />
      <line x1="16" y1="19" x2="20" y2="15" strokeWidth="2" />
      <path d="M20 15L21.5 13.5" strokeWidth="1.5" />
      <circle cx="15.5" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconRender({ icon, className = '' }) {
  if (icon === 'svg:stomach') return <span className={`inline-flex items-center justify-center ${className}`}><StomachSVG /></span>
  if (icon === 'svg:scalpel') return <span className={`inline-flex items-center justify-center ${className}`}><ScalpelSVG /></span>
  if (icon === 'svg:lungs') return <span className={`inline-flex items-center justify-center ${className}`}><LungsSVG /></span>
  if (icon === 'svg:neurosurgery') return <span className={`inline-flex items-center justify-center ${className}`}><NeurosurgerySVG /></span>
  return <i className={`${icon} ${className}`}></i>
}
