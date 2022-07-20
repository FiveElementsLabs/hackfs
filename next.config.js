/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "img.freepik.com",
      "d33wubrfki0l68.cloudfront.net",
      "images.cointelegraph.com",
      "app.aave.com",
    ],
  },
};

module.exports = nextConfig;
