import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form'

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />
	}

	return (
		<div className="flex-row">
			<h2>Welcome to the app</h2>
			<p>this is the landing page. The login form should be on this page. you will have the ability to click a register button if you don't want to login.</p>
			<div className="flex-c-50">
				<LoginForm />
				<Link to="/register">Register</Link>
			</div>
			<div className="flex-c-50">
				<p>jldksafklafdjla</p>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage)