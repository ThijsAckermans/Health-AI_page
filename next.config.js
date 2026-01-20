/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Set basePath for GitHub Pages: https://<username>.github.io/<repo-name>/
  basePath: '/Health-AI_page',
  assetPrefix: '/Health-AI_page/',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
