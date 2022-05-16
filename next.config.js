/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    disableStaticImages: true,
  },
}

module.exports = nextConfig
