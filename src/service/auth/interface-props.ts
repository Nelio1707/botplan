const PREFIX = '@';
export const USER_TOKEN_KEY = PREFIX + btoa('User');
export const USER_NAME_KEY = PREFIX + btoa('Name');
export const USER_EMAIL_KEY = PREFIX + btoa('Email');
export const USER_DATE_KEY = PREFIX + btoa('Date');

export interface storages {
  token: string;
  data?: {
    email: string;
    id: string;
    name: string;
  };
}
