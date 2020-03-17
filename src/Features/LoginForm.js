import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import { ForgottenPassForm } from "./ForgottenPass"

const isEmailValid = email => {
  if (!email) {
    return false;
  }
  if (
    !/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(email)
  ) {
    return false;
  }
  return true;
};

const isPasswordValid = password => {
  if (!password) {
    return false;
  }
  return true;
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError("Email is not valid:");
    } else {
      setEmailError("");
      postData();
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Password is required:");
    } else {
      setPasswordError("");
      postData();
    }
  };

  const postData = () => {
    try {
      axios.post("url", { email, password });
      console.log("poszlo....!");
    } catch (error) {
      console.log(error);
    }
  };

  const changeEmail = email => setEmail(email);
  const changePassword = password => setPassword(password);

  return (
    <section>
      <form>
        <label className="title">Login Panel</label>
        {emailError && <label className="error">{emailError}</label>}
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={e => changeEmail(e.target.value)}
        />
        {passwordError && <label className="error">{passwordError}</label>}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => changePassword(e.target.value)}
        />
        <Link to="/ForgottenPass">
          <label className="label">Forgotten password?</label>
        </Link>
        <button className="login" value="Login" onClick={onSubmit}>
          Login
          </button>
        <Link to="/RegisterForm" className="link">
          <button className="register" value="Register">
            Register
            </button>
        </Link>
      </form>
    </section>
  );
};

