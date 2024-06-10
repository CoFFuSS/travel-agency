'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import hotelView from '@/assets/images/HotelView.png';
import { Country } from '@/types/countriesResponses';

import styles from './styles.module.scss';

import VideoButton from '../VideoButton/VideoButton';

interface BookNowProps {
  countries: Country[];
}

export default function BookNow({ countries }: BookNowProps) {
  const translations = useTranslations('bookNow');

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h2>{translations('subtitle')}</h2>
        <h1>{translations('title')}</h1>
        <h6>{translations('info')}</h6>
        <VideoButton />
        {countries.map((country) => (
          <div key={country.code}>
            <h3>{country.name}</h3>
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <Image
          src={hotelView}
          alt='hotel view'
        />
      </div>
    </section>
  );
}
