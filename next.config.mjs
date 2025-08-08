/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "/Revellison",
    assetPrefix: "/Revellison",
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
