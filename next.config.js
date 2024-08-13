/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  assetPrefix: '',
  images: {
    loader: 'default', // This is the default loader, but you might want to customize this depending on your needs.
  },
};

module.exports = nextConfig;
