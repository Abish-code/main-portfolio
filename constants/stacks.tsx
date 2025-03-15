import type { JSX } from 'react';

import {
  Bootstrap,
  FramerMotion,
  Git,
  JavaScript,
  MySQL,
  NextJS,
  NuxtJS,
  PHP,
  PostgreSQL,
  Prisma,
  ReactJS,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vercel,
} from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import type { Stack } from '@/types/stack';

export const STACKS: Stack = {
  Bootstrap: <Bootstrap className={cn('size-4 fill-[#7952B3]')} />,
  FramerMotion: <FramerMotion className={cn('size-4')} />, // No specific fill color provided, adjust if needed
  Git: <Git className={cn('size-4 fill-[#F05032]')} />,
  JavaScript: <JavaScript className={cn('size-4 fill-[#F7DF1E]')} />,
  MySQL: <MySQL className={cn('size-4 fill-[#4479A1]')} />,
  'Next.js': <NextJS className={cn('size-4 fill-black', 'dark:fill-white')} />,
  'Nuxt.js': <NuxtJS className={cn('size-4 fill-[#00DC82]')} />,
  PHP: <PHP className={cn('size-4 fill-[#777BB4]')} />,
  PostgreSQL: <PostgreSQL className={cn('size-4 fill-[#4169E1]')} />,
  Prisma: <Prisma className={cn('size-4 fill-[#2D3748]', 'dark:fill-white')} />,
  'React.js': <ReactJS className={cn('size-4 fill-[#61DAFB]')} />,
  Supabase: <Supabase className={cn('size-4 fill-[#3FCF8E]')} />,
  'Tailwind CSS': <TailwindCSS className={cn('size-4 fill-[#06B6D4]')} />,
  TypeScript: <TypeScript className={cn('size-4 fill-[#3178C6]')} />,
  Vercel: <Vercel className={cn('size-4 fill-black', 'dark:fill-white')} />, // Added Vercel with typical styling
};

export const CORE_STACKS: {
  name: string;
  icon: JSX.Element;
  link: string;
}[] = [
  { name: 'Bootstrap', icon: <Bootstrap />, link: 'https://getbootstrap.com' },
  {
    name: 'Framer Motion',
    icon: <FramerMotion />,
    link: 'https://www.framer.com/motion',
  },
  { name: 'Git', icon: <Git />, link: 'https://git-scm.com' },
  { name: 'JavaScript', icon: <JavaScript />, link: 'https://javascript.com' },
  { name: 'MySQL', icon: <MySQL />, link: 'https://www.mysql.com' },
  { name: 'Next.js', icon: <NextJS />, link: 'https://nextjs.org' },
  { name: 'Nuxt.js', icon: <NuxtJS />, link: 'https://nuxt.com' },
  { name: 'PHP', icon: <PHP />, link: 'https://www.php.net' },
  {
    name: 'PostgreSQL',
    icon: <PostgreSQL />,
    link: 'https://www.postgresql.org',
  },
  { name: 'Prisma', icon: <Prisma />, link: 'https://www.prisma.io' },
  { name: 'React.js', icon: <ReactJS />, link: 'https://react.dev' },
  { name: 'Supabase', icon: <Supabase />, link: 'https://supabase.com' },
  {
    name: 'Tailwind CSS',
    icon: <TailwindCSS />,
    link: 'https://tailwindcss.com',
  },
  {
    name: 'TypeScript',
    icon: <TypeScript />,
    link: 'https://www.typescriptlang.org',
  },
  { name: 'Vercel', icon: <Vercel />, link: 'https://vercel.com' },
];