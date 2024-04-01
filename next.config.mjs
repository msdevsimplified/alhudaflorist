/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/images',
          },
          {
            protocol: 'https',
            hostname: 'urbanmeadowflowers.com.sg',
            port: '',
            pathname: '/cdn/shop/products',
          },
        ],
      },
};

export default nextConfig;
