/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const ContentSecurityPolicyDevelopment = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  media-src 'none';
`;

const ContentSecurityPolicyProduction = `
  default-src 'self';
  connect-src 'self' https://vitals.vercel-insights.com/;
  media-src 'none';
`;

const ContentSecurityPolicy =
  process.env.NODE_ENV === "development"
    ? ContentSecurityPolicyDevelopment
    : ContentSecurityPolicyProduction;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  productionBrowserSourceMaps: true,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  async headers() {
    return [
      {
        source: "/",
        headers: securityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
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
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
