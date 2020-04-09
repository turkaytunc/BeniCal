import React from "react";
import TTPlayer from "./TTPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <TTPlayer></TTPlayer>
      </Route>
      <Route exact path="/:activeVideo">
        <TTPlayer></TTPlayer>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
