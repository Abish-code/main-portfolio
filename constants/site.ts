// D:\portfolio\constants\site.ts

export interface Author {
  name: string;
  url: string;
  avatar: string;
  email: string;
  linkedIn: string;
  github: {
    username: string;
    url: string;
  };
  twitter?: string;
}

export interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  keywords?: string[];
}

// Define the BASE_URL dynamically for local or production environment
export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://abishkarki.vercel.app' // Production URL (Vercel)
    : 'http://localhost:3000'; // Local development URL

// Configuration for your site (SEO, metadata, etc.)
export const SITE: Site = {
  url: BASE_URL,
  name: 'Abish karki', // Updated from 'Abish Portfolio' to include 'Abishkarki'
  title: 'Abishkarki | Abish Karki', // Updated from 'Abish Karki' to include 'Abishkarki' branding
  description:
    'Passionate Web Developer who focuses on solving problems with digital products under the Abishkarki brand.',
  author: {
    name: 'Abish Karki',
    url: 'https://abishkarki.vercel.app', // Author URL (Portfolio URL)
    email: 'abish6338@gmail.com',
    linkedIn: 'https://np.linkedin.com/in/abish-karki-0518a5332',
    github: {
      username: 'Abish-code',
      url: 'https://github.com/Abish-code',
    },
    avatar: '/media/bonabrian/bonabrian.jpg', // Path to your avatar image
    twitter: '@bonabrian_',
  },
  keywords: [
    'Abishkarki',
    'Abish Karki',
    'developer',
    'portfolio',
    'developer portfolio website',
    'portfolio website',
    'full-stack',
    'back-end',
    'front-end',
    'web developer',
  ],
};