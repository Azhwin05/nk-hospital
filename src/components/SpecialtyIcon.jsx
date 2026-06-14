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

export function IconRender({ icon, className = '' }) {
  if (icon === 'svg:stomach') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <StomachSVG />
      </span>
    )
  }
  if (icon === 'svg:scalpel') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <ScalpelSVG />
      </span>
    )
  }
  return <i className={`${icon} ${className}`}></i>
}
