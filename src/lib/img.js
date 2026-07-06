// Optimize Cloudinary image URLs on the fly: auto format + quality, resized,
// face-cropped. Falls back to the original URL for non-Cloudinary images.
export function optimg(url, width = 300) {
  if (!url || !url.includes('res.cloudinary.com') || !url.includes('/upload/')) return url
  return url.replace('/upload/', `/upload/f_auto,q_auto,w_${width},c_fill,g_face/`)
}
