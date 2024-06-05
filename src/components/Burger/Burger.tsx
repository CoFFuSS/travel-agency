import { MouseEventHandler } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}

export default function Burger({ isOpen, toggleMenu }: BurgerProps) {
  return (
    <button
      onClick={toggleMenu}
      className={classNames(styles.burger, isOpen ? styles.open : '')}
      type='button'
    >
      {Array.from({ length: 3 }, (_, k) => k + 1).map((idx) => (
        <span
          key={idx}
          className={styles.line}
        />
      ))}
    </button>
  );
}
