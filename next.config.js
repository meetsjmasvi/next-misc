/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: "/post",
        destination: "/newpost",
        permanent: true,
      },
      {
        source: "/post/:postid",
        destination: "/newpost/:postid",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
