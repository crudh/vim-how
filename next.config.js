/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
});
