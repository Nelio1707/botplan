import { ExpiredSession } from "./expiredSession";
import { USER_TOKEN_KEY } from "./interface-props";

export const isAuthenticated = () => {
  if (localStorage.getItem(USER_TOKEN_KEY) === null) return false;
  return !ExpiredSession();
};
