import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// will need to import components and pages here
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/saved"]}>
          <Saved />
        </Route>
        <Route exact path="/books/:id">
          <Detail />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
