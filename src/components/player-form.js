import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Radio from './radio';
import Input from './input';
import Select from './select';
import {registerPlayer} from '../actions/players';
import Contract from './contract';

export class PlayerForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(registerPlayer(values));
	}


	render() {
		return (
			<form className="login-form"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
					id="player-reg">
				<label htmlFor="firstName">First Name</label>
				<Field component={Input} type="text" name="firstName" />
				<label htmlFor="lastName">Last Name</label>
				<Field component={Input} type="text" name="lastName" />
				<label htmlFor="month">Month</label>
				<Field component={Input} type="integer" name="month" />
				<label htmlFor="day">Day</label>
				<Field component={Input} type="integer" name="day" />
				<label htmlFor="year">Year</label>
				<Field component={Input} type="integer" name="year" />
				<label htmlFor="sport">Baseball or softball?</label>
				<Field name="sport" component={Radio} options={{baseball: 'Baseball', softball: 'Softball'}} />
				<label htmlFor="division">Division</label>
				<Field component={Select} name="division" options={{shetland: 'Shetland 6U', pinto: 'Pinto 8U', mustang: 'Mustang 10U', bronco: 'Bronco 12U', pony: 'Pony 14u'}} />
				<label htmlFor="team">Team</label>
				<Field component={Input} type="text" name="team" />
				<Contract />
				<label htmlFor="contract">Please enter your full name below to acknolwedge signing this waiver</label>
				<Field component={Input} type="text" name="waiver" /> 
				<button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'player',
	// onSubmitFail: (errors, dispatch) => dispatch(focus('player', Object.keys(errors)[0]))
})(PlayerForm)