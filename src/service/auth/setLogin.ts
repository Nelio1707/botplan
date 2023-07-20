import {
  storages,
  USER_DATE_KEY,
  USER_EMAIL_KEY,
  USER_NAME_KEY,
  USER_TOKEN_KEY,
} from "./interface-props";

export const SetLogin = (value: storages) => {
  localStorage.setItem(USER_TOKEN_KEY, value.token);
  localStorage.setItem(USER_NAME_KEY, window.btoa(value?.data?.name ?? ""));
  localStorage.setItem(USER_EMAIL_KEY, window.btoa(value?.data?.email ?? ""));
  localStorage.setItem(
    USER_DATE_KEY,
    window.btoa(new Date().getTime().toString())
  );
};
