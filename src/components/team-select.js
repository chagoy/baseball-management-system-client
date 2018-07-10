import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Select from './select';
import {getAllTeams} from '../actions/teams';

export class TeamForm extends React.Component {
	componentDidMount() {
		return this.props.dispatch(getAllTeams());
	}

	onSubmit(values) {

	}

	render() {
		return (
			<p>kajsdf</p>
		);
	}
}

export default reduxForm({
	form: 'team',
})(TeamForm);