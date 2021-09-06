import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "pages/Home";
import Fiction from "pages/Fiction";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/fiction" exact component={Fiction} />
      </Switch>
    </Router>
  );
}

export default App
