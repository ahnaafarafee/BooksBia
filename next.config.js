const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     swSrc: "service-worker.js",
//   },
// });

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
});
