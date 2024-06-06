import emailjs from '@emailjs/browser';

import { getEnv } from './getEnv';

const serviceId = getEnv('serviceId');
const templateId = getEnv('templateId');
const userId = getEnv('userId');

export const sendEmailFooter = async (email: string) => {
  if (serviceId && templateId && userId) {
    await emailjs.send(serviceId, templateId, { user_email: email }, userId);
  }
};
