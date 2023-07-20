import { GetUserDate } from "./getStorage";

export const ExpiredSession = () => {
  const date = GetUserDate();

  const endDate = new Date(parseInt(date)).setDate(
    new Date(parseInt(date)).getDate() + 1
  );

  if (new Date().getTime() >= endDate) {
    localStorage.clear();
    return true;
  } else return false;
};
