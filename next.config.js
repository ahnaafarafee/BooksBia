const withPWA = require("next-pwa");

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/authors/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/books/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/genres/:slug",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
});
