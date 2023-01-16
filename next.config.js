/* eslint-disable import/extensions */
/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: false,
  images: { domains: ['images.pexels.com', 'unsplash.com'] },
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
