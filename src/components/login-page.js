import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
require('./login-page.css')

export function LoginPage(props) {
	if (props.loggedIn) {
		return <Redirect to='/dashboard' />
	}

	return (
		<div>
			<img src="https://s3-us-west-2.amazonaws.com/am-i-going-over/neonbrand-423329-unsplash.jpg" alt="kids running onto the field" className="backgroundImage ig-filter" />
			<section>
				<h2>Login to view your dashboard</h2>
			</section>
			<LoginForm/>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage)