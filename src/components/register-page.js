import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegisterPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="home">
			<h2>Welcome new users, to register a player, you need to register yourself first</h2>
			<p>this is a form to sign up</p>
			<RegistrationForm />
			<Link to="/">Or log in</Link>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);