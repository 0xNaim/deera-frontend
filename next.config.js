/* eslint-disable import/extensions */
/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: false,
  images: { domains: ['images.pexels.com', 'unsplash.com'] },
  i18n,
};

module.exports = nextConfig;
