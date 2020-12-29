import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import LogInInput from "../components/LoginInput";
import { UserIcon, KeyIcon, SignInIcon } from "../icons";
import { useForm } from "../custom-hooks/useForm";

export default function LoginPage() {
  const [values, handleChange] = useForm({ username: "", password: "" });
  return (
    <div className="page">
      <div className="login-page">
        <Logo
          className="logo-title-big"
          container_className="logo-big-container"
        />
        <form className="login-form">
          <LogInInput
            type="text"
            title="username"
            value={values.username}
            onChange={handleChange}
          >
            <UserIcon />
          </LogInInput>
          <LogInInput
            type="password"
            title="password"
            value={values.password}
            onChange={handleChange}
          >
            <KeyIcon />
          </LogInInput>
          <button type="submit" className="login-btn">
            <SignInIcon className="login-icon blue-igam" />
          </button>
        </form>
        <Link to="/sign-up" className="sign-up-link">
          Sign-Up
        </Link>
      </div>
    </div>
  );
}
