import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Register from "./RegisterForm";

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
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
      postData();
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
      postData();
    }
  };

  const postData = () => {
    console.log("poszlo....!");
    try {
      axios.post("url", { email, password });
    } catch (error) {
      console.log(error);
    }
  };

  const changeEmail = email => setEmail(email);
  const changePassword = password => setPassword(password);

  return (
    <BrowserRouter>
      <section>
        <Route path="./RegisterForm" component={Register} />
        <form>
          <label>Login Form</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => changeEmail(e.target.value)}
          />
          {emailError && <label>{emailError}</label>}

          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => changePassword(e.target.value)}
          />
          {passwordError && <label>{passwordError}</label>}
          {/* <label>Forgotten password?</label> */}
          <button id="login" value="Login" onClick={onSubmit}>
            Login
          </button>
          <Link to="./RegisterForm" class="link">
            <button id="register" value="Register">
              Register
            </button>
          </Link>
        </form>
      </section>
    </BrowserRouter>
  );
};
