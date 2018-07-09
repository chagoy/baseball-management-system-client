import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import {logout} from '../actions/auth';

export class LogoutForm extends React.Component {
	onSubmit(event) {
		// event.preventDefault();
		return this.props.dispatch(logout(this.props.currentUser));
	}

	render() {
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<button type="submit">Logout</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'logout'
})(LogoutForm)