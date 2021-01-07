import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import LogInInput from "../components/LoginInput";
import { UserIcon, KeyIcon, SignInIcon } from "../icons";
import { useForm } from "../custom-hooks/useForm";

export default function LoginPage(props) {
  const [values, handleChange] = useForm({ username: "", password: "" });
  const handleSignIn = (event) => {
    event.preventDefault();
    props.handleSignIn(values.username);
  };
  return (
    <div className="page">
      <div className="login-page">
        <Logo
          className="logo-title-big"
          container_className="logo-big-container"
        />
        <form className="login-form" onSubmit={handleSignIn}>
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
        <a to="/sign-up" className="sign-up-link">
          Sign-Up
        </a>
      </div>
    </div>
  );
}
