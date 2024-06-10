import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import { pickMessages } from '@/utils/pickMessages';
import { getData } from '@/api/getCountries';

import HomeComponentToShow from '../HomeComponentsToShow/HomeComponentsToShow';

interface HomeComponentProps {
  locale: string;
  messages: Record<string, string | AbstractIntlMessages>;
}

export default async function HomeComponent({ locale, messages }: HomeComponentProps) {
  const countries = await getData();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pickMessages(messages, 'home')}
    >
      <HomeComponentToShow countries={countries} />
    </NextIntlClientProvider>
  );
}
