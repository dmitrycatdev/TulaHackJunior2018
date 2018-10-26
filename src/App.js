import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import { Feed } from './Components/Main/Feed/Feed';

class App extends Component {
  render() {
    return (

      <Router>
        <Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/feed" component={Feed} />
        </Fragment>
    </Router>
    );
  }
}

export default App;
