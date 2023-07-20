"use client";

import { LoginProvider } from "src/context/login/provider";
import LoginPage from "./loginPage";

export default function Login() {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
}
