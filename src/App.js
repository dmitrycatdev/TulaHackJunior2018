import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
    </Router>
    );
  }
}

export default App;
