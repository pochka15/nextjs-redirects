/** @type {import('next').NextConfig} */
const nextConfig = {
  // default version
  trailingSlash: true,
  async redirects() {
    const allRedirects = [
      { source: "/test/", destination: "/", permanent: true },
    ];
    return allRedirects;
  },
};

// V2
// const nextConfig = {
//   trailingSlash: true,
//   async redirects() {
//     return [
//       { source: "/test/", destination: "/", permanent: true },
//       { source: "/", destination: "/", permanent: true },
//     ];
//   },
// };

// V3
// const nextConfig = {
//   trailingSlash: true,
//   async redirects() {
//     return [
//       { source: "/test/", destination: "/", permanent: true },
//       {
//         source: "/:path((?!.+\\.[\\w]+$)(?!.*/$).*)",
//         destination: "/:path/",
//         permanent: true,
//       },
//     ];
//   },
// };

export default nextConfig;
