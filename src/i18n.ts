import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: (
      await (locale === 'en' ? import(`../messages/en.json`) : import(`../messages/${locale}.json`))
    ).default,
    timeZone: 'Europe/Minsk',
  };
});
