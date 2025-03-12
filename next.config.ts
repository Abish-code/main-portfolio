import MillionLint from '@million/lint';
import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

import appHeaders from './config/next/headers';
import redirects from './config/next/redirects';

const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      // google avatar
      { hostname: 'lh3.googleusercontent.com' },
      // github avatar
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'spotify.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'ui-avatars.com' },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Ensure Prisma Client is generated for server-side functions
    if (isServer) {
      config.plugins.push(
        new (require('webpack').DefinePlugin)({
          'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        }),
      );
    }

    return config;
  },
  async headers() {
    return appHeaders;
  },
  async redirects() {
    return redirects;
  },
};

const millionConfig = {
  mute: true,
  rsc: true,
};

export default MillionLint.next(millionConfig)(withContentlayer(nextConfig));
