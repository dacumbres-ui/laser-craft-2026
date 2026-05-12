import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure all URLs are served with a trailing slash.
  // This eliminates the /page vs /page/ duplicate canonical issue.
  trailingSlash: true,

  async redirects() {
    return [
      // Redirect www to non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.laser-craft.site" }],
        destination: "https://laser-craft.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
