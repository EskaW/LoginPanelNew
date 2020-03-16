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
    <Route exact path="/ForgottenPassword" component={ForgottenPassForm} />
  </Switch>
)



function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Healthy Club page! </h1> */}
      <BrowserRouter>
        <div className="Panel">
          <Router />
          {/* <RegisterForm class="LoginPanel"></RegisterForm> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
