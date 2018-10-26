import decode from 'jwt-decode';
import axios from 'axios';

export default class AuthService{
	constructor(domain){
		this.domain = domain || '/api/auth';
		this.fetch = this.fetch.bind(this);
		this.login = this.login.bind(this);
		this.getProfile = this.getProfile.bind(this);
	}

	/**
	* Method for login (connect to server without JWT)
	*/
	login(phone, password){
		return axios.post(`${root}/api/login`, {phone, password})
			.then(response => {
				this.setToken(response.data.access_token);
				return Promise.resolve(response)
			});
	}

	/*
	* Method for logout (connect to server with JWT)
	*/
	logout(){
		this.fetch(`${root}/api/auth/logout`, 'post');
		// localStorage.removeItem('id_token');
		localStorage.clear();
	}

	/*
	* Fetch from server (with JWT token)
	*/
    fetch(url, method, data = null) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        if (this.loggedIn()) 
            headers['Authorization'] = 'Bearer ' + this.getToken();
        else{
        	localStorage.clear();
        	window.location.replace('/');
        }

        return axios({
			method: method,
			url: url,
			data: data || null,
			headers: headers
        })
        .then(this._checkStatus)
        .then(response => response.data)
        .catch(res => console.log(res))
    }

	/*
	* Method for determine if user login and JWT is not expired
	*/
	loggedIn(){
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token);
	}

	/*
	* Determine if JWT expired
	*/
	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) 
				return true;
			else
				return false;
		} 
		catch(err) {
			return false
		}
	}

	/*
	* Set JWT to local storage
	*/
	setToken(idToken){
		localStorage.setItem('id_token', idToken);
	}

	/*
	* Get JWT from local storage
	*/
	getToken(){
		return localStorage.getItem('id_token');
	}

	/*
	* Get profile information from decoded JWT
	*/
	getProfile(){
		return decode(this.getToken());
	}

    /*
    * Check HTTP status code
    */
    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}
const root = 'http://tester1.evgenytk.ru';