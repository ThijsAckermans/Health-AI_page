
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export required for GitHub Pages
  output: 'export',

  // Disable Next.js image optimization (required for static hosting)
  images: {
    unoptimized: true,
  },

  // Trailing slashes work well with GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
``

