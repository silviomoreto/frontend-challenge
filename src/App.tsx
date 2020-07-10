import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./views/Register";
import RegisterSuccess from "./views/RegisterSuccess";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Register />
        </Route>
        <Route path="/success">
          <RegisterSuccess />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
