// In-memory sliding-window limiter. Good enough for a single-instance
// deployment; if the site is ever scaled horizontally this should move to
// Supabase or Redis so the counters are shared across instances.

const hits = new Map()

export function rateLimit(key, { limit, windowMs }) {
  const now = Date.now()
  const recent = (hits.get(key) || []).filter(t => now - t < windowMs)

  if (recent.length >= limit) {
    hits.set(key, recent)
    return { allowed: false, retryAfter: Math.ceil((windowMs - (now - recent[0])) / 1000) }
  }

  recent.push(now)
  hits.set(key, recent)

  // Opportunistic cleanup so the map doesn't grow without bound.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every(t => now - t >= windowMs)) hits.delete(k)
    }
  }

  return { allowed: true }
}

export function clientIp(req) {
  const fwd = req.headers.get('x-forwarded-for')
  return (fwd ? fwd.split(',')[0] : req.headers.get('x-real-ip') || 'unknown').trim()
}
