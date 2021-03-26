import { Route } from '../types';
import { signUp } from '../controllers/auth/signup';
import { login } from '../controllers/auth/login';
import { emailConfirmation } from '../controllers/auth/emailConfirmation';
import {
  schemeSignup,
  schemeEmailConfirmation,
} from '../utils/validationSchemes/auth';
import { validateScheme } from '../middlewares';

export const auth: Route[] = [
  {
    path: '/auth/signup',
    method: 'post',
    handlers: [validateScheme(schemeSignup), signUp],
  },
  {
    path: '/auth/login',
    method: 'post',
    handlers: [login],
  },
  {
    path: '/auth/email-confirmation',
    method: 'post',
    handlers: [
      validateScheme(schemeEmailConfirmation, 'body'),
      emailConfirmation,
    ],
  },
];
