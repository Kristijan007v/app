const withPWA = require("next-pwa");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPWA({
  withBundleAnalyzer,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
