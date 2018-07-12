import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Select from './select';
import {createTeam} from '../actions/teams';
import {Redirect} from 'react-router-dom';

export class TeamForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(createTeam(values));
	}

	render() {
		return (
			<form className="form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<label htmlFor="name">Team Name</label>
				<Field component={Input} type="text" name="name" />
				<label htmlFor="division">Division</label>
				<Field component={Select} name="division" options={{shetland: 'Shetland 6U', pinto: 'Pinto 8U', mustang: 'Mustang 10U', bronco: 'Bronco 12U', pony: 'Pony 14u'}} />
				<button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'team'
})(TeamForm);