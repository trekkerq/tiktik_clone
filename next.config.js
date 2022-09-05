/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['tyrus.design', 'lh3.googleusercontent.com'],
    }
}

module.exports = nextConfig