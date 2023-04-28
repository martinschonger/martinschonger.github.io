/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'imgix',
    path: 'sdv.imgix.net',
  },
  assetPrefix: './',
  output: 'export',
};

export default nextConfig;
