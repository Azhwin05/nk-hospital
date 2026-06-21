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
      <line x1="12" y1="3" x2="12" y2="9" />
      <path d="M12 7 Q8 7 6 10 Q4 13 5 16 Q6 19 9 19 Q11 19 12 17" />
      <path d="M12 7 Q16 7 18 10 Q20 13 19 16 Q18 19 15 19 Q13 19 12 17" />
      <path d="M9 13 Q9 15 10 16" />
      <path d="M15 13 Q15 15 14 16" />
    </svg>
  )
}

function NeurosurgerySVG() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Brain outline */}
      <path d="M9 4C6.5 4 4 6 4 9C4 11 5 12.5 6.5 13.5C6.5 15.5 7.5 17 9 17H13" />
      <path d="M15 4C17.5 4 20 6 20 9C20 11 19 12.5 17.5 13.5C17.5 15.5 16.5 17 15 17H13" />
      <line x1="13" y1="4" x2="13" y2="17" />
      {/* Scalpel */}
      <line x1="15" y1="19" x2="21" y2="13" strokeWidth="1.5" />
      <path d="M21 13 L22 11.5 L20 12.5Z" fill="currentColor" stroke="none" />
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
