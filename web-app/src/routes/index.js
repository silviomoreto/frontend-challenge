import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import CreateAccount from "../pages/CreateAccount";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/criar-conta" component={CreateAccount} />
      <Route path="/sucesso" component={Success} />
      <PrivateRoute path="/bem-vindo" component={Welcome} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
