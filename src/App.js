import { Component } from "react";
// pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Divestment from "./pages/Divestment.js";
// components
import Header from "./components/header.js";
import "./App.css";
//extensions
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/divestment" component={Divestment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
