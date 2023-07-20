import {
  USER_NAME_KEY,
  USER_TOKEN_KEY,
  USER_DATE_KEY,
  USER_EMAIL_KEY,
} from "./interface-props";

export const getToken = () => localStorage.getItem(USER_TOKEN_KEY);

export const GetName = () =>
  window.atob(localStorage.getItem(USER_NAME_KEY) ?? "");
export const GetEmail = () =>
  window.atob(localStorage.getItem(USER_EMAIL_KEY) ?? "");
export const GetUserDate = () =>
  window.atob(localStorage.getItem(USER_DATE_KEY) ?? "");
