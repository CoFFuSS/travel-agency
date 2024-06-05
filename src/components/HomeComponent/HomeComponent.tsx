import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

import { pickMessages } from '@/utils/pickMessages';

interface HomeComponentProps {
  locale: string;
  messages: Record<string, string | AbstractIntlMessages>;
}

export default function HomeComponent({ locale, messages }: HomeComponentProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={pickMessages(messages, 'home')}
    >
      <section>
        <h1>Home</h1>
      </section>
    </NextIntlClientProvider>
  );
}
