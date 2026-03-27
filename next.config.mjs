/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export (if you want static site)
  // NOTE: 301 redirects defined in `redirects()` below will NOT be applied
  // when using static export. You must configure redirects at the hosting
  // level (Netlify, Vercel, Nginx, Apache, etc.). See comments below.
  output: 'export',

  // Optimize images for static export
  images: {
    unoptimized: true,
  },

  // Ensure proper page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // 301 Redirects
  // ⚠️ These only work if you remove `output: 'export'` and use a Node.js server.
  // For static hosting, implement these redirects at the hosting/CDN level instead.
  async redirects() {
    return [
      // --- Old project pages (no longer exist) → /projects ---
      {
        source: '/startfromx',
        destination: '/projects',
        permanent: true, // 301
      },
      {
        source: '/thelink2',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/thesimplicity',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/ascenplus',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/360vr',
        destination: '/projects',
        permanent: true,
      },

      // --- Renamed project page ---
      {
        source: '/theedge',
        destination: '/projects/the-edge',
        permanent: true,
      },

      // --- Portfolio → /projects ---
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true,
      },

      // --- News pages → /projects ---
      {
        source: '/news',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/news/categories/interior-vr-tour',
        destination: '/projects',
        permanent: true,
      },

      // --- About (no longer exists) → /projects ---
      {
        source: '/about',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;