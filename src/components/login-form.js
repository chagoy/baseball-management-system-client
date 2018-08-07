import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {Link} from 'react-router-dom';
import {required, nonEmpty, length, isTrimmed} from '../validators';
const userNameLength = length({min: 4, max: 16});

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}
		return (
			<form role="login" className="form login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				{error}
				<label htmlFor="username">Username</label>
				<Field
					component={Input}
					type="text"
					name="username"
					id="username"
					validators={[required, nonEmpty, isTrimmed, userNameLength]}
					warn={[required, nonEmpty, isTrimmed, userNameLength]}
				/>
				<label htmlFor="password">Password</label>
				<Field
					component={Input}
					type="password"
					name="password"
					id="password"
					validators={[required, nonEmpty, isTrimmed]}
					warn={[required, nonEmpty, isTrimmed]}
				/>
				<button disabled={this.props.pristine || this.props.submitting}>Log in</button>
				<p className="message">Or create a <Link to="/register">new account</Link></p>
			</form>
		)
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);