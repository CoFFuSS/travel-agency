'use client';

import { useTranslations } from 'next-intl';

import { footerLinks } from '@/constants/footerLinks';

import styles from './styles.module.scss';

import FooterForm from '../FooterForm/FooterForm';

export default function Footer() {
  const translation = useTranslations('footer');

  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.about}>
          <h3>{translation('view')}</h3>
          <h6>{translation('about')}</h6>
        </div>
        {footerLinks.map(({ name: title, navs }) => (
          <div
            key={title}
            className={styles.columns}
          >
            <h5>{translation(`links.${title}.name`)}</h5>
            {navs.map(({ name, href }) => (
              <h6 key={name}>
                <a href={href}>{translation(`links.${title}.${name}`)}</a>
              </h6>
            ))}
          </div>
        ))}
        <div>
          <h5>{translation('news.newsTitle')}</h5>
          <h6>{translation('news.subscribe')}</h6>
          <FooterForm />
        </div>
      </section>
      <div className={styles.bottom}>{translation('bottom')}</div>
    </footer>
  );
}
