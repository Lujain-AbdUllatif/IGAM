import React, { useState } from "react";
import Logo from "../components/Logo";
import LogInInput from "../components/LoginInput";
import { UserIcon, KeyIcon } from "../icons";
import { useForm } from "../custom-hooks/useForm";
export default function LoginPage() {
  const [values, handleChange] = useForm({ username: "", password: "" });
  return (
    <div>
      <Logo />
      <LogInInput
      type ='text'
        title="username"
        value={values.username}
        onChange={handleChange}
      >
        <UserIcon />
      </LogInInput>
      <LogInInput
      type='password'
        title="password"
        value={values.password}
        onChange={handleChange}
      >
        <KeyIcon />
      </LogInInput>
    </div>
  );
}
