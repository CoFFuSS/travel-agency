import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  dataCy?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  className?: string;
  variant: 'primary' | 'secondary';
}

export default function Button({
  children,
  dataCy,
  disabled,
  isSubmit,
  className = '',
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
      data-cy={dataCy}
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
      {...props}
    >
      {children}
    </button>
  );
}
