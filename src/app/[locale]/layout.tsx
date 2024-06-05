import '@/styles/globals.scss';

import { Raleway } from 'next/font/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { pickMessages } from '@/utils/pickMessages';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import en from '../../../messages/en.json';
import ru from '../../../messages/ru.json';

const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: 'Travel Agency',
  description: 'Travel Agency Application with Next.js',
};

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;

  if (locale === 'ru') {
    messages = ru;
  } else if (locale === 'en') {
    messages = en;
  } else {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={raleway.className}>
        <NextIntlClientProvider messages={pickMessages(messages, 'header')}>
          <Header />
        </NextIntlClientProvider>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
