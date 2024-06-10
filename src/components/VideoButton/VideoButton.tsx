import React from 'react';
import Link from 'next/link';

import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

export default function VideoButton() {
  return (
    <Link href={routes.rooms}>
      <div className={styles.button}>
        <div className={styles.icon} />
        <h5>Take a tour</h5>
      </div>
    </Link>
  );
}
