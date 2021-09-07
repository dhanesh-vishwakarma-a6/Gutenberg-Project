import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// component
import Loader from "components/Loader";
// pages
const Home = lazy(() => import("pages/Home"))
const Fiction = lazy(() => import("pages/Fiction"))
const Philosophy = lazy(() => import("pages/Philosophy"))
const Drama = lazy(() => import("pages/Drama"))
const History = lazy(() => import("pages/History"))
const Humour = lazy(() => import("pages/Humour"))
const Adventure = lazy(() => import("pages/Adventure"))
const Politics = lazy(() => import("pages/Politics"))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fiction" exact component={Fiction} />
          <Route path="/philosophy" exact component={Philosophy} />
          <Route path="/drama" exact component={Drama} />
          <Route path="/history" exact component={History} />
          <Route path="/humour" exact component={Humour} />
          <Route path="/adventure" exact component={Adventure} />
          <Route path="/politics" exact component={Politics} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App
