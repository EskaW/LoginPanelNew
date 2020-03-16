import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

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

export const ForgottenPassForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [labelMsg, setLabelMsq] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
      postData();
      setLabelMsq("Link to reset Password has been sent to your email");
    }
  };

  const postData = () => {
    console.log("poszlo....!");
    try {
      axios.post("url", { email });
    } catch (error) {
      console.log(error);
    }
  };

  const changeEmail = email => setEmail(email);

  return (
    <BrowserRouter>
      <section>
        <Route path="./LoginForm" component={LoginForm} />
        <header>Recover Password</header>
        <form>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => changeEmail(e.target.value)}
          />
          {emailError && <label>{emailError}</label>}

          <button id="send" value="Send" onClick={onSubmit}>
            Send
          </button>
          <Link to="./LoginForm" className="link">
            <label className="label">Go back to login Form</label>
          </Link>
          {labelMsg && <label>{labelMsg}</label>}
        </form>
      </section>
    </BrowserRouter>
  );
};
