import { Pathnames } from 'next-intl/navigation';

import { routes } from './constants/routes';

export const locales = ['en', 'ru'] as const;

export const pathnames: Record<string, string> = {
  '/': routes.home,
  '/room': routes.room,
  '/toure': routes.toure,
  '/about': routes.about,
  '/contact': routes.contact,
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';

export type AppPathname = keyof typeof pathnames;
