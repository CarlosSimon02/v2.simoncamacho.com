import createMDX from "@next/mdx";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    useCache: true,
  },
};

const withMDX = createMDX({});
const withNextIntl = createNextIntlPlugin();

export default withMDX(withNextVideo(withNextIntl(nextConfig)));
