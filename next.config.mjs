/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_API_URL: process.env.NEXT_API_URL,
        NEXT_API_KEY: process.env.NEXT_API_KEY
    }
};

export default nextConfig;
