import './global.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import {
  Fira_Code as FiraCode,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import GuestbookWidget from '@/components/guestbook-widget';
import AppProvider from '@/components/providers/app-provider';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import NowPlaying from '@/components/shared/now-playing';
import { Toaster } from '@/components/ui/toaster';
import { DEFAULT_METADATA, seo } from '@/lib/meta';
import { cn } from '@/lib/utils';

export const metadata: Metadata = seo({
  ...DEFAULT_METADATA,
  title: {
    default: 'Abish Karki',
    template: '%s | Abish Karki',
  },
  description: 'Portfolio of Abish Karki - Developer, Designer, and Creator.',
  openGraph: {
    title: 'Abish Karki',
    description: 'Portfolio of Abish Karki - Developer, Designer, and Creator.',
    url: 'https://abishkarki.vercel.app/',
    siteName: 'Abish Karki',
    type: 'website',
  },
});

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  width: 'device-width',
};

const fontCal = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal',
});

const fontSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = FiraCode({
  subsets: ['latin'],
  variable: '--font-mono',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ECYRHW74C8"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ECYRHW74C8');
        `}
      </Script>

      {/* Standard Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {/* Additional Favicons */}
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="384x384"
        href="/android-chrome-384x384.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="70x70"
        href="/mstile-70x70.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/mstile-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="150x150"
        href="/mstile-150x150.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="310x150"
        href="/mstile-310x150.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="310x310"
        href="/mstile-310x310.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="Wm0A2afSK-d5bQs_BCXNqDsaWxrVVIf1OzDaXKyTRPA"
      />
    </head>
    <body
      className={cn(fontSans.variable, fontMono.variable, fontCal.variable)}
    >
      <AppProvider>
        <div id="__app" className={cn('flex min-h-screen flex-col')}>
          <Header />
          <main>{children}</main>
          <Footer />
          <GuestbookWidget />
          <NowPlaying />
        </div>
        <Analytics />
        <Toaster />
      </AppProvider>
    </body>
  </html>
);

export default RootLayout;
