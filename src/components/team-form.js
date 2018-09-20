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
			<form className="team-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<h3>Create A Team</h3>
				<label htmlFor="name">Team Name</label>
				<Field component={Input} 
							inputClass='team-input'
							type="text" 
							name="name" />
				<label htmlFor="division">Division</label>
				<Field component={Select} 
							selectInput='team-select'
							name="division" 
							options={{shetland: 'Shetland 6U', pinto: 'Pinto 8U', mustang: 'Mustang 10U', bronco: 'Bronco 12U', pony: 'Pony 14u'}} />
				<button type="submit" className="team-button" disabled={this.props.pristine || this.props.submitting}>Submit</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'team'
})(TeamForm);