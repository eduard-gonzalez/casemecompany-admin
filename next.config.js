/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // For Local Server
    // API_PROD_URL: "http://127.0.0.1:8000/api/",
    API_PROD_URL: "https://casemecompany-backend.macroevo.me/api/",
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/es/dashboard",

        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1:8000",
      },
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "http",
        hostname: "casemeapi.test",
      },
      {
        protocol: "https",
        hostname: "casemecompany-backend.macroevo.me",
      },

    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
