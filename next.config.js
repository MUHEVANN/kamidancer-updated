/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1"], // Tambahkan host yang digunakan ke dalam array ini
  },
};

module.exports = nextConfig;
