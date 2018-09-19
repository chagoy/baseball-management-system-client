import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
require('./register-page.css');

export function RegisterPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="home">
			<img src="https://s3-us-west-2.amazonaws.com/am-i-going-over/neonbrand-423336-unsplash.jpg" alt="a child running to first base" className="backgroundImage ig-filter"/>
				
				<RegistrationForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);