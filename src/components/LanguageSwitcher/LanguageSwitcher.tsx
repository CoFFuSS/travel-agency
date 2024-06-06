'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import Image from 'next/image';

import { usePathname, useRouter } from '@/navigation';
import { languages } from '@/constants/languages';

import styles from './styles.module.scss';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (languageCode: string) => {
    startTransition(() => {
      router.push(pathName, { locale: languageCode });
    });
  };

  return (
    <div className={styles.switcher}>
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={styles.button}
          type='button'
        >
          <Image
            width={40}
            height={30}
            src={language.flag}
            alt={language.code}
            className={`${styles.flag} ${locale === language.code ? styles.selected : ''}`}
          />
        </button>
      ))}
      <h6>{isPending ? 'Loading...' : ''}</h6>
    </div>
  );
}
