/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... your existing config (like output: 'export' if you have it)

  // Force disable Pages Router detection
  // This prevents Next.js from looking for /pages
  experimental: {
    appDir: true,  // already true in most setups, but explicit is good
  },

  // If you have src/ folder, ensure Next.js knows the app dir location
  // (optional but helps in hybrid migrations)
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],  // no .page.tsx or similar
};

export default nextConfig;