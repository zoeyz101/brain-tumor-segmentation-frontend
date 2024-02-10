/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/patient-creation',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
