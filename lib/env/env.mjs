import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * Transform an empty string to undefined
 */
const emptyStringToUndefined = z.literal('').transform(() => undefined);

/**
 * An optional string type that is at least one character long, or transformed to undefined
 */
const optionalString = z
  .string()
  .trim()
  .min(1)
  .optional()
  .or(emptyStringToUndefined);

export const env = createEnv({
  /**
   * Client-side environment variables (prefixed with NEXT_PUBLIC_)
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_GOOGLE_ANALYTICS: optionalString,
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    NEXT_PUBLIC_AVAILABLE_FOR_HIRE: z
      .string()
      .refine((val) => val === 'true' || val === 'false')
      .transform((val) => val === 'true')
      .default('false'),
  },

  /**
   * Server-side environment variables (not available on client)
   */
  server: {
    /** Database */
    DATABASE_URL: z.string().url(), // Required for Prisma
    DIRECT_URL: z.string().url(),   // Required for direct DB access

    /** NextAuth */
    NEXTAUTH_URL: z.string().url(),        // Required for authentication
    NEXTAUTH_SECRET: z.string().trim().min(1), // Required for signing

    /** Sentry (optional) */
    SENTRY_DSN: z.string().url().optional(),
    SENTRY_AUTH_TOKEN: optionalString,

    /** Google (optional) */
    GOOGLE_ID: optionalString,
    GOOGLE_SECRET: optionalString,

    /** GitHub (optional) */
    GITHUB_ID: optionalString,
    GITHUB_SECRET: optionalString,
    GITHUB_READ_USER_TOKEN_PERSONAL: optionalString,

    /** Spotify (optional) */
    SPOTIFY_CLIENT_ID: optionalString,
    SPOTIFY_CLIENT_SECRET: optionalString,
    SPOTIFY_CLIENT_REFRESH_TOKEN: optionalString,

    /** WakaTime (optional) */
    WAKATIME_API_KEY: optionalString,
  },

  /**
   * Shared between server and client
   */
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },

  /**
   * Runtime environment variables (manually destructured for Next.js edge runtime)
   */
  runtimeEnv: {
    /** Client */
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_AVAILABLE_FOR_HIRE: process.env.NEXT_PUBLIC_AVAILABLE_FOR_HIRE,

    /** Server */
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GITHUB_READ_USER_TOKEN_PERSONAL: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_CLIENT_REFRESH_TOKEN: process.env.SPOTIFY_CLIENT_REFRESH_TOKEN,
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,

    /** Shared */
    NODE_ENV: process.env.NODE_ENV,
  },

  /**
   * Add debug logging to verify env loading
   */
  onValidationError: (error) => {
    console.error('❌ Invalid environment variables:', error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  },
});