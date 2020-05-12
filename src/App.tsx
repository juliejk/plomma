import React from "react";
import { Switch, Route } from "react-router-dom";

import Demo from "./components/demo";
import Home from "./components/home";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/demo" component={Demo} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
