import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Radio from './radio';
import Input from './input';
import Select from './select';
import {registerPlayer} from '../actions/players';
import Contract from './contract';
import {required, nonEmpty, length, isTrimmed, maxValue, number} from '../validators';
const monthMax = maxValue(12);
const dayMax = maxValue(31);

export class PlayerForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(registerPlayer(values));
	}


	render() {
		return (
			<form className="form"
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
					id="player-reg">
				<label htmlFor="firstName">First Name</label>
				<Field component={Input} 
						type="text" 
						name="firstName" 
						validators={[required, nonEmpty, isTrimmed]}
						warn={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="lastName">Last Name</label>
				<Field component={Input} 
						type="text" 
						name="lastName" 
						validators={[required, nonEmpty, isTrimmed]}
						warn={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="month">Month</label>
				<Field component={Input} 
						type="integer" 
						name="month" 
						validators={[required, nonEmpty, monthMax, number]}
						warn={[required, nonEmpty, monthMax, number]}
				/>
				<label htmlFor="day">Day</label>
				<Field component={Input} 
						type="integer" 
						name="day" 
						validators={[required, nonEmpty, dayMax, number]}
						warn={[required, nonEmpty, dayMax, number]}
				/>
				<label htmlFor="year">Year</label>
				<Field component={Input} 
						type="integer" 
						name="year" 
						validators={[required, nonEmpty, number]}
						warn={[required, nonEmpty, dayMax, number]}
				/>
				<label htmlFor="sport">Baseball or softball?</label>
				<Field name="sport" 
						component={Radio} 
						options={{baseball: 'Baseball', softball: 'Softball'}} 
						checked={true}
				/>
				<label htmlFor="division">Division</label>
				<Field component={Select} 
						name="division" 
						options={{shetland: 'Shetland 6U', pinto: 'Pinto 8U', mustang: 'Mustang 10U', bronco: 'Bronco 12U', pony: 'Pony 14u'}} 
						validators={[required]}
						warn={[required]}
				/>
				<label htmlFor="team">Team</label>
				<Field component={Input} 
						type="text" 
						name="team" 
				/>
				<Contract />
				<label htmlFor="contract">Please enter your full name below to acknolwedge signing this waiver</label>
				<Field component={Input} 
						type="text" 
						name="waiver" 
						validators={[required, isTrimmed, nonEmpty]}
						warn={[required, isTrimmed, nonEmpty]}
				/> 
				<button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'player',
	// onSubmitFail: (errors, dispatch) => dispatch(focus('player', Object.keys(errors)[0]))
})(PlayerForm)