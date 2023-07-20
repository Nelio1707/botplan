export interface LoginContextProps {
  login: () => void;
}

export interface LoginProviderProps {
  children: JSX.Element[] | JSX.Element;
}
