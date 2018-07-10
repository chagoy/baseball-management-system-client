import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Select from './select';
import {getAllTeams} from '../actions/teams';
import {updateTeam} from '../actions/players';

export class TeamForm extends React.Component {
	componentDidMount() {
		return this.props.dispatch(getAllTeams());
	}

	onSubmit(values) {
		return this.props.dispatch(updateTeam(this.props.id, values))
	}

	render() {
		//we are going to be using the id to send back to the server, not the name
		let obj = {};
		const options = this.props.teams.forEach(team => obj[team._id] = team.name);
		

		return (
			<form
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<Field component={Select} name="team" options={obj} />
				<button type="submit">Change</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	teams: state.team.teams,
	id: state.player.player._id
})

export default reduxForm({
	form: 'team',
})(connect(mapStateToProps)(TeamForm));