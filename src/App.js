import React from "react";
import "./App.css";
import { LoginForm } from "./Features/LoginForm";
import { RegisterForm } from "./Features/RegisterForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ForgottenPassForm } from "./Features/ForgottenPass";

const Router = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/RegisterForm" component={RegisterForm} />
    <Route exact path="/ForgottenPass" component={ForgottenPassForm} />
  </Switch>
)



function App() {
  return (
    <div className="App">
      {/* <label className="header">Welcome to MedicalCare Club! </label> */}
      <BrowserRouter>
        <div className="Panel ContainerFlex">
          <Router />
          {/* <RegisterForm class="LoginPanel"></RegisterForm> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
