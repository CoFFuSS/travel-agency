import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import { pickMessages } from '@/utils/pickMessages';
import { getData } from '@/api/getCountries';

import styles from './styles.module.scss';

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
      <section className={styles.container}>
        <h1>Home</h1>
        {countries.map((country) => (
          <div key={country.code}>
            <h3>{country.name}</h3>
          </div>
        ))}
      </section>
    </NextIntlClientProvider>
  );
}
