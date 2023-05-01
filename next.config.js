/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = { nextConfig, i18n, nextTranslate };   
