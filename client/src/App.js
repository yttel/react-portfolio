import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
