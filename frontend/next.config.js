/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "app.aave.com",
      "img.freepik.com",
      "d33wubrfki0l68.cloudfront.net",
      "images.cointelegraph.com",
    ],
  },
};

module.exports = nextConfig;
