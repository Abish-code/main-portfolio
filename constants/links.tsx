import {
  AtSign,
  BookOpenText,
  Coffee,
  Dashboard,
  Email,
  FileCode,
  GitHub,
  Home,
  LinkedIn,
  Pencil,
  RSS,
  Twitter,
} from '@/components/shared/icons';
import type { CommandMenu, NavLink } from '@/types/menu';

import { SITE } from './site';

export const ROUTES = {
  blog: '/blog',
  projects: '/projects',
  snippets: '/snippets',
  tags: '/tags',
  guestbook: '/guestbook',
  about: '/about',
  dashboard: '/dashboard',
  resume: '/resume',
  uses: '/uses',
  photos: '/photos',
};

export const NAV_LINKS: NavLink[] = [
  {
    path: '/',
    label: 'Home',
    icon: <Home />,
    onlyShowOnDropdownMenu: true,
  },
  {
    path: ROUTES.blog,
    label: 'Blog',
    icon: <Pencil />,
  },
  {
    path: ROUTES.projects,
    label: 'Projects',
    icon: <Coffee />,
  },
  {
    path: ROUTES.dashboard,
    label: 'Dashboard',
    icon: <Dashboard />,
  },
  {
    path: ROUTES.snippets,
    label: 'Snippets',
    icon: <FileCode />,
    onlyShowOnDropdownMenu: true,
  },
  {
    path: ROUTES.guestbook,
    label: 'Guestbook',
    icon: <BookOpenText />,
  },
  {
    path: ROUTES.about,
    label: 'About',
    icon: <AtSign />,
  },
  {
    path: ROUTES.photos,
    label: 'Photos',
    icon: <Pencil />,
    onlyShowOnDropdownMenu: true,
  },
];

export const COMMAND_PAGES: CommandMenu[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home />,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'Blog',
    href: ROUTES.blog,
    icon: <Pencil />,
    isExternal: false,
    eventName: 'Pages: Blog',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'Projects',
    href: ROUTES.projects,
    icon: <Coffee />,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'PAGE',
  },
  {
    label: 'Dashboard',
    href: ROUTES.dashboard,
    icon: <Dashboard />,
    isExternal: false,
    eventName: 'Pages: Dashboard',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'Snippets',
    href: ROUTES.snippets,
    icon: <FileCode />,
    isExternal: false,
    eventName: 'Pages: Snippets',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'Guestbook',
    href: ROUTES.guestbook,
    icon: <BookOpenText />,
    isExternal: false,
    eventName: 'Pages: Guestbook',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'About',
    href: ROUTES.about,
    icon: <AtSign />,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'Uses',
    href: ROUTES.uses,
    icon: <Pencil />,
    isExternal: false,
    eventName: 'Pages: Uses',
    type: 'PAGE',
    closeOnSelect: true,
  },
  {
    label: 'Photos',
    href: ROUTES.photos,
    icon: <Pencil />,
    isExternal: false,
    eventName: 'Pages: Photos',
    type: 'PAGE',
    closeOnSelect: true,
  },
];

export const COMMAND_SOCIAL_MEDIA: CommandMenu[] = [
  {
    label: 'Email',
    href: `mailto:${SITE.author.email}?subject=Hi Abish!`,
    icon: <Email />,
    isExternal: true,
    eventName: 'Contact: Email',
    type: 'CONTACT',
  },
  {
    label: 'GitHub',
    href: SITE.author.github.url,
    icon: <GitHub />,
    isExternal: true,
    eventName: 'Social: GitHub',
    type: 'LINK',
  },
  {
    label: 'LinkedIn',
    href: SITE.author.linkedIn,
    icon: <LinkedIn />,
    isExternal: true,
    eventName: 'Social: LinkedIn',
    type: 'LINK',
  },
  {
    label: 'X',
    href: SITE.author.twitter ?? '',
    icon: <Twitter />,
    isExternal: true,
    eventName: 'Social: X',
    type: 'LINK',
  },
];

export const COMMAND_APPEARANCE = [];

export const FOOTER_LINKS = [
  [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: ROUTES.about,
    },
    {
      title: 'Dashboard',
      path: ROUTES.dashboard,
    },
    {
      title: 'Projects',
      path: ROUTES.projects,
    },
  ],
  [
    {
      title: 'Blog',
      path: ROUTES.blog,
    },
    {
      title: 'Snippets',
      path: ROUTES.snippets,
    },
    {
      title: 'Uses',
      path: ROUTES.uses,
    },
  ],
  [
    {
      title: 'Guestbook',
      path: ROUTES.guestbook,
    },
    {
      title: 'Photos',
      path: ROUTES.photos,
    },
  ],
];

export const FOOTER_ICON_LINKS = [
  {
    title: 'GitHub',
    url: SITE.author.github.url,
    icon: <GitHub className="size-4" />,
    className: 'hover:text-current',
  },
  {
    title: 'LinkedIn',
    url: SITE.author.linkedIn,
    icon: <LinkedIn className="size-4" />,
    className: 'hover:text-[#0A66C2]',
  },
  {
    title: 'RSS Feed',
    url: '/feed.xml',
    icon: <RSS className="size-4" />,
    className: 'hover:text-[#FFA500]',
  },
];
