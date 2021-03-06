import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
require('./login-page.css')

export function LoginPage(props) {
	if (props.loggedIn) {
		return <Redirect to='/dashboard' />
	}

	return (
		<div className='loginBackground'>
			<div className='login-form-container'>
				<LoginForm/>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage)