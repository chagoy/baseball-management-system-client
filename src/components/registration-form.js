import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import Radio from './radio';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
	onSubmit(values) {
		const { firstName, lastName, username, password, email, phone, texting, address, city, zipcode } = values;
		const user = { firstName, lastName, username, password, email, phone, texting, address, city, zipcode };
		return this.props.dispatch(registerUser(user))
				.then(() => this.props.dispatch(login(username, password)))
				.catch(err => console.log(err)) //dispatch to another action
	}

	render() {
		return (
			<form 
				className="login-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
			)}>
				<label htmlFor="firstName">First Name</label>
				<Field component={Input} type="text" name="firstName" />
				<label htmlFor="lastName">Last Name</label>
				<Field component={Input} type="text" name="lastName" />
				<label htmlFor="email">Email</label>
				<Field component={Input} type="text" name="email" />
				<label htmlFor="phone">Phone Number</label>
				<Field component={Input} type="text" name="phone" />
				<label htmlFor="texting">Text Messages?</label>
				<Field component={Radio} name="texting" options={{Yes: 'Yes', No: 'False'}} />
				<label htmlFor="address">Address</label>
				<Field component={Input} type="text" name="address" />
				<label htmlFor="city">City</label>
				<Field component={Input} type="text" name="city" />
				<label htmlFor="zip">Zip Code</label>
				<Field component={Input} type="text" name="zipcode" />
				<label htmlFor="username">Username</label>
				<Field component={Input} type="text" name="username" />
				<label htmlFor="password">Password</label>
				<Field component={Input} type="password" name="password" />
				<label htmlFor="passwordConfirm">Confirm password</label>
				<Field component={Input} type="password" name="passwordConfirm" />
				<button type="submit" disabled={this.props.pristine || this.props.submitting}>
					Register
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm)