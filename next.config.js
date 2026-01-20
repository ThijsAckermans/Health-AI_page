/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Set basePath if your repo name is not the root domain
  // For GitHub Pages: https://<username>.github.io/<repo-name>/
  // Uncomment and replace 'Health-AI_page' with your actual repo name if needed
  // basePath: '/Health-AI_page',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
