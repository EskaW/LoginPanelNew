import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import { LoginForm } from "./LoginForm";
import { BrowserRouter, Link, Route } from "react-router-dom";

const validate = form => {

  if (!form.name) {
    return "name is required";
  } else if (form.name.length < 2) {
    return "name is too short";
  }

  if (!form.email) {
    return "Email is required";
  } else if (
    !/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(
      form.email
    )
  ) {
    return "Wrong email";
  }

  if (!form.password) {
    return "password is required";
  } else if (form.password.length < 7) {
    return "Password is too short";
  }

  if (!form.passwordConf) {
    return "password is required";
  } else if (form.passwordConf.length < 7) {
    return "Password is too short";
  }

  if (form.password !== form.passwordConf) {
    return "Password are not the same";
  }
  return false;
};

export const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [msg, setMsq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: ""
  });

  const changeField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errorMsg = validate(form);
    if (errorMsg) {
      setError(errorMsg);
      return;
    } else {
      // setMsq("Form submitted")
      setError("");
      postData();
      console.log("formsubmitted", form);
    }
  };
  const postData = () => {
    try {
      console.log("poszlo....!");
      axios.post("url", form);
      setMsq("Form submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form>
        <label className="title">Register Form</label>
        {error && <label className="error">{error}</label>}
        {msg && <label>{msg}</label>}
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={changeField}
        />

        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={form.email}
          onChange={changeField}
        />

        <input
          type="password"
          name="password"
          placeholder="Provide password"
          value={form.password}
          onChange={changeField}
        />

        <input
          type="password"
          name="passwordConf"
          placeholder="Confirm password"
          value={form.passwordConf}
          onChange={changeField}
        />

        <button className="login" value="Submit" onClick={handleSubmit}>
          Submit
          </button>
        <Link to="/">
          <label className="label">Already a member?</label>
        </Link>
      </form>
    </section>
  );
};

export default RegisterForm;
