import React from 'react';
import AuthService from './AuthService.jsx'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			login: '',
			password: '',
			errorMessage: ''
		}
		this.Auth = new AuthService();
	}

	inputChange = e => this.setState({ [e.target.name]: e.target.value })

	formIsValid = () => {
		let { login, password } = this.state;

		if (!login || !password){
			this.setState({ errorMessage: 'Заполните все данные' });
			return false;
		} 

		return true
	}

	onLoginSubmit = (e) => {
		e.preventDefault();

		if (!this.formIsValid()) 
			return false;

		this.Auth.login(this.state.login, this.state.password)
        .then(res =>{
           this.props.history.replace('/cabinet');
        })
        .catch(err =>{
            this.setState({ errorMessage: 'Неправильный логин или пароль' });
        })
	}

	render() {
		let { login, password, errorMessage } = this.state;

		if (this.Auth.loggedIn()) 
			return <Redirect to='/cabinet' />

		return <div>
			<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html">
      <b>Вход</b>
    </a>
  </div>
  {/* /.login-logo */}
  <div className="login-box-body">
    <form action="../../index2.html" method="post">
      <div className="form-group has-feedback">
        <input
            className="form-control"
            value={login} 
		    onChange={this.inputChange}
			name="login" 
			placeholder="Ваш логин" 
        />
        <span className="glyphicon glyphicon-envelope form-control-feedback" />
      </div>
      <div className="form-group has-feedback">
        <input
          className="form-control"
          value={password}
          onChange={this.inputChange}
          type="password"
          name="password"
          placeholder="Ваш пароль" 
        />
        <span className="glyphicon glyphicon-lock form-control-feedback" />
      </div>
      <div className="row">
        
        <div className="col-xs-4">
          <button
            type="submit"
            className="btn btn-primary btn-block btn-flat"
          >
            Войти
          </button>
        </div>
        {/* /.col */}
      </div>
    </form>
    <div className="social-auth-links text-center">
      <p>или</p>
      <a
        href="#"
        className="btn btn-block btn-social btn-facebook btn-flat"
      >
        <i className="fa fa-vk" /> Войти через вконтакте
      </a>
      <a
        href="#"
        className="btn btn-block btn-social btn-google btn-flat"
      >
        <i className="fa fa-google-plus" /> Войти через Google+
      </a>
    </div>
  </div>
</div>
		</div>
	}
}