/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['behnam-rahmati-samples.ir']
  },
}

module.exports = nextConfig
