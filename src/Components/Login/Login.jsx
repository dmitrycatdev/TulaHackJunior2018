import React from 'react';
import AuthService from './AuthService.jsx'
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			phone: '',
			password: '',
			errorMessage: ''
		}
		this.Auth = new AuthService();
	}

	inputChange = e => this.setState({ [e.target.name]: e.target.value })

	formIsValid = () => {
		let { phone, password } = this.state;

		if (!phone || !password){
			this.setState({ errorMessage: 'Заполните все данные' });
			return false;
		} 

		return true
	}

	onLoginSubmit = (e) => {
		e.preventDefault();

		if (!this.formIsValid()) 
			return false;

		this.Auth.login(this.state.phone, this.state.password)
        .then(res =>{
           this.props.history.replace('/cabinet');
        })
        .catch(err =>{
            this.setState({ errorMessage: 'Неправильный логин или пароль' });
        })
	}

	render() {
		let { phone, password, errorMessage } = this.state;

		if (this.Auth.loggedIn()) 
			return <Redirect to='/feed' />

		return <div>
			<div className="login-box">
  <div className="login-logo">
      <b>Вход</b>
  </div>
  {/* /.login-logo */}
  <div className="login-box-body">
    <form onSubmit={this.onLoginSubmit} method="post">
      <div className="form-group has-feedback">
        <input
            className="form-control"
            value={phone} 
		    onChange={this.inputChange}
			name="phone" 
			placeholder="Ваш телефон" 
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
    {this.state.errorMessage && 
        <p className="text-danger" > {this.state.errorMessage} </p>
    }
    <div className="social-auth-links text-center">
      <p>или</p>
      <a
        href="javascript:void(0)"
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