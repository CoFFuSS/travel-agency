import { z } from 'zod';

export const footerFormSchema = z.object({ email: z.string().email('invalidEmail') }).required();

export type TypeFooterForm = z.infer<typeof footerFormSchema>;

export interface FooterFormFields {
  email: string;
}
