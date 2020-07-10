import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";

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
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />

      <PrivateRoute path="/bem-vindo" component={Welcome} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
