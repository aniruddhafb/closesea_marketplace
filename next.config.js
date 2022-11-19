/** @type {import('next').NextConfig} */
require('dotenv').config({path: './'})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ['gateway.pinata.cloud', 'localhost', 'picsum.photos'] // <== Domain name
  }
}

module.exports = nextConfig
