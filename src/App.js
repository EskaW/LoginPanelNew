import React from "react";
import "./App.css";
import { LoginForm } from "./Features/LoginForm";
import { RegisterForm } from "./Features/RegisterForm";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Panel">
        <LoginForm class="Panel"></LoginForm>
        {/* <RegisterForm class="LoginPanel"></RegisterForm> */}
      </div>
    </div>
  );
}

export default App;
