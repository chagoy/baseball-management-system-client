import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import Select from './select';
import { getAllTeams } from '../actions/teams';
// import { createGame } from '../actions/games';
import { Redirect } from 'react-router-dom';

export class GameForm extends React.Component {
	componentDidMount() {
		return this.props.dispatch(getAllTeams());
	}

	onSubmit(values) {
		
	}

	render() {
		return (
			<h1>hello</h1>
		)
	}
}

export default reduxForm({
	form: 'game'
})(GameForm);