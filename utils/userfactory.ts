import { ENV } from './env';

export function generateUser() {
  return {
    firstName: "SDET",
    lastName: "B-17",
    email: `${ENV.EMAIL_USER}`,
    password: ENV.DEFAULT_PASSWORD,
    phoneNumber: ENV.USER_PHONE,
    address: ENV.USER_ADD,
    newPassword: ENV.NEW_PASSWORD
  };
}