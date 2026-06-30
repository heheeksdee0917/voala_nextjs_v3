/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export (if you want static site)
  output: 'export',
  
  // Optimize images for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure proper page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;