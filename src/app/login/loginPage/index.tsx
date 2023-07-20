import { Button } from "@mui/material";
import { useLogin } from "src/context/login/hooks";

function LoginPage() {
  const { login } = useLogin();
  return (
    <>
      <h1>Login!!</h1>
      <Button onClick={login}>Login</Button>
    </>
  );
}

export default LoginPage;
