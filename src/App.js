import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import { Feed } from './Components/Main/Feed/Feed';
import { Schedule } from './Components/Main/Schedule/Schedule';
import AuthService from './Components/Login/AuthService';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoaded: false,
      user: null
    }
    this.Auth = new AuthService();

  }

  componentDidMount() {
    this.Auth.fetch("http://tester1.evgenytk.ru/api/auth/me", 'get')
   .then(res => 
     {
         this.setState({
             isLoaded: true,
             user: res
         });
     })
 }

  render() {
    return (

      <Router>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Route path="/feed" component={()=><Feed user={this.state.user}/>} />
          <Route path="/schedule" component={()=><Schedule user={this.state.user}/>} />
        </Fragment>
    </Router>
    );
  }
}

export default App;
