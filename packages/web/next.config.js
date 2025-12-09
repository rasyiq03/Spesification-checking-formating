/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile the workspace analyzer package so Next.js compiles its TypeScript sources
  transpilePackages: ['@spec/analyzer'],
};

module.exports = nextConfig;
