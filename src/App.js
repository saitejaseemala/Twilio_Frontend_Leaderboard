import React from "react";
import "./App.css";
import LeaderBoard from "./Component/LeaderBoard";
import "h8k-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const title = "SPA - LeaderBoard";

function App() {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LeaderBoard />
          </Route>
          <Route path="/:sortItem">
            <LeaderBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
