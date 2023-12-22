import type { MainNavItem } from '@/types';

// import { Airplay, BarChart, Link2, QrCode, Users, Webhook } from 'lucide-react';
export type SiteConfig = typeof siteConfig;

const links = {
  twitter: '',
  github: '',
  githubAccount: '',
  discord: '',
};

export const siteConfig = {
  name: 'Mintary',
  description: 'The documentation you want, effortlessly',
  url: '',
  ogImage: '',
  links,
  mainNav: [
    {
      title: 'Sign in',
      href: '/signin',
    },
    {
      title: 'Documentation',
      href: '/customers',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Careers',
      href: '/careers',
    },
    {
      title: 'Enterprise',
      href: '/enterprise',
    },
    {
      title: 'Customers',
      href: '/customers',
    },
  ] satisfies MainNavItem[],
};

// export const FEATURES_LIST = [
//   {
//     title: 'Powerful Analytics For The Modern Marketer',
//     shortTitle: 'Advanced Analytics',
//     icon: BarChart,
//     slug: 'features/analytics',
//   },
//   {
//     title: 'Branded Links That Stand Out',
//     shortTitle: 'Branded Links',
//     icon: Airplay,
//     slug: 'features/branded-links',
//   },
//   {
//     title: 'Free QR Code Generator',
//     shortTitle: 'QR Codes',
//     icon: QrCode,
//     slug: 'features/qr-codes',
//   },
//   {
//     title: 'Personalize Your Short Links',
//     shortTitle: 'Personalization',
//     icon: Link2,
//     slug: 'features/personalization',
//   },
//   {
//     title: 'Collaborate With Your Team',
//     shortTitle: 'Team Collaboration',
//     icon: Users,
//     slug: 'features/collaboration',
//   },
//   {
//     title: 'Programmatic Link Creation',
//     shortTitle: 'API',
//     icon: Webhook,
//     slug: 'docs',
//   },
// ];
