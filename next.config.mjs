/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'sdv.imgix.net',
  },
  assetPrefix: './',
  output: 'export',
}

export default nextConfig
