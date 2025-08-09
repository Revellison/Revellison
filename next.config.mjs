const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
