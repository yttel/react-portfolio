import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
