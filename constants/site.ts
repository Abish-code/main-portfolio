interface Author {
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

interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  keywords?: string[];
}

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://abishkarki.xyz'
    : 'http://localhost:3000';

export const SITE: Site = {
  url: BASE_URL,
  name: "Abish portfolio",
  title: 'Abish karki',
  description:
    'Passionate Web devloper who focused on solving problems with digital products.',
  author: {
    name: 'Abish karki',
    url: 'https://bonabrian.com',
    email: 'abish6338@gmail.com',
    linkedIn: 'https://np.linkedin.com/in/abish-karki-0518a5332',
    github: {
      username: 'Abish-code',
      url: 'https://github.com/Abish-code',
    },
    avatar: '/media/bonabrian/bonabrian.jpg',
    twitter: '@bonabrian_',
  },
  keywords: [
    'Abish',
    'Abish karki',
    'developer',
    'portfolio',
    'developer portfolio website',
    'portfolio website',
    'full-stack',
    'back-end',
    'front-end',
    'Web devloper',
  ],
};
