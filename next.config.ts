import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  experimental: {
    useCache: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextVideo(withNextIntl(nextConfig));
