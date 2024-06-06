'use client';

import { ChangeEvent, forwardRef } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface InputProps {
  variant: 'primary' | 'secondary';
  placeholder?: string;
  dataCy: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder = '', dataCy, type, name, variant, value, onChange, ...restProps }, ref) => (
    <>
      <input
        className={cn(styles.input, {
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
        })}
        ref={ref}
        placeholder={placeholder}
        data-cy={dataCy}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </>
  ),
);

export default Input;
