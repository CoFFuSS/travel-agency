'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { sendEmailFooter } from '@/utils/sendEmail';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { FooterFormFields, footerFormSchema, TypeFooterForm } from '@/utils/footerFormSchema';

import styles from './styles.module.scss';

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<FooterFormFields>({ resolver: zodResolver(footerFormSchema), mode: 'onChange' });

  const translation = useTranslations('footer');

  const handleSendEmail = async (data: TypeFooterForm) => {
    try {
      await sendEmailFooter(data.email);
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Something went wrong: ${err.message}`);
      } else {
        console.error('An unexpected error occurred', err);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className={styles.form}
      >
        <div className={styles.input_container}>
          <Input
            dataCy='subscribes-email-input'
            type='email'
            variant='primary'
            placeholder={translation('news.input')}
            className={styles.input}
            {...register('email')}
          />
          <Button
            disabled={!isDirty || !isValid}
            dataCy='footer-form-button'
            variant='primary'
            isSubmit
            className={styles.submit}
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
}
