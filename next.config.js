/** @type {import('next').NextConfig} */
require('dotenv').config({path: './'})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
