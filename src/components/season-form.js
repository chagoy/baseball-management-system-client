import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import Select from './select';
import { createSeason } from '../actions/seasons';
import { Redirect } from 'react-router-dom';

export class SeasonForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(createSeason(values));
	}

	render() {
		return (
			<form className='team-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<h3>Add A New Season</h3>
				<label htmlFor='season'>Season</label>
				<Field component={Input}
						inputClass='team-input'
						type='text'
						name='season'/>
				<label htmlFor='year'>Year</label>
				<Field component={Input}
						inputClass='team-input'
						type='integer'
						name='year' />

				<button type='submit' className='team-button' disabled={this.props.pristine || this.props.submitting}>Submit</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'season'
})(SeasonForm)