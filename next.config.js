/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/shivam-singh-portfolio' : '',
  assetPrefix: isProd ? '/shivam-singh-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
