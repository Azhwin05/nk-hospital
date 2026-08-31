/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  // /book was the old booking URL and is already indexed, so it redirects
  // permanently to the keyword-rich path rather than 404ing.
  async redirects() {
    return [
      { source: '/book', destination: '/book-an-appointment', permanent: true },
      { source: '/book/book-appointment', destination: '/book-an-appointment/book', permanent: true },
    ]
  },
}
export default nextConfig
