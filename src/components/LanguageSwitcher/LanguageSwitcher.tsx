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

  const handleSelectChange = () => {
    startTransition(() => {
      router.push(pathName, { locale });
    });
  };

  return (
    <div className={styles.selector}>
      <select
        value={locale}
        onChange={handleSelectChange}
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
          >
            <Image
              width={53}
              height={40}
              src={language.flag}
              alt={language.code}
              className={`${styles.flag} ${locale === language.code ? styles.selected : ''}`}
            />
          </option>
        ))}
      </select>
      <h6>{isPending}</h6>
    </div>
  );
}
