import React from "react";
import TTPlayer from "./TTPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TTPlayer} />
      <Route exact path="/:activeVideo" component={TTPlayer} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
