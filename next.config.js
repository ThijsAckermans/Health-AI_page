/** @type {import('next').NextConfig} */

// Use BASE_PATH env variable for flexibility:
// - GitHub Pages (subdirectory): BASE_PATH='/Health-AI_page'
// - Custom domain (root): BASE_PATH='' or not set
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  
  // Make basePath available to components
  env: {
    BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
