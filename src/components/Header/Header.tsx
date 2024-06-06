'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { navLinks } from '@/constants/navLinks';
import logo from '@/assets/icons/logo.svg';
import Burger from '@/components/Burger/Burger';
import NavigationLink from '@/components/NavigationLink/NavigationLink';
import { routes } from '@/constants/routes';

import styles from './styles.module.scss';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const translation = useTranslations('header');

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Burger
        isOpen={isOpen}
        toggleMenu={handleToggleMenu}
      />
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <Link href={routes.home}>
            <Image
              src={logo}
              alt='logo'
            />
          </Link>
          <ul className={classNames(styles.links, isOpen ? styles.open : '')}>
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <NavigationLink
                  href={href}
                  data-cy={name}
                >
                  {translation(`links.${name}`)}
                </NavigationLink>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
