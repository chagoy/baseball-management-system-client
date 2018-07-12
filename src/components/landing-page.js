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
			<h2>Baseball & Softball</h2>
			<p>this is the landing page. The login form should be on this page. you will have the ability to click a register button if you don't want to login. asdflkjfa</p>
			<div className="flex-row">
				<div className="flex-c-50">
					<LoginForm />
				</div>
				<div className="flex-c-50">
					<img className="landing-img" src="https://images-na.ssl-images-amazon.com/images/I/61-yP6ZMMGL._SX522_.jpg" alt="image of pablo sanchez, all time great child baseball player" />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage)