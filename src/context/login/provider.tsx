import { LoginContext } from ".";
import { LoginProviderProps } from "./interface-props";
import { sendLogin } from "./service";

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const login = () => {
    sendLogin();
  };

  return (
    <LoginContext.Provider
      value={{
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
