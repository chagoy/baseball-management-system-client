import React from 'react';
import { connect } from 'react-redux';
import PayConfirm from './pay-confirm';
import {fetchPlayer} from '../actions/players';
import DivisionSelect from './division-select';
import TeamSelect from './team-select';

export class Player extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchPlayer(this.props.match.params.id));
	}

	render() {
		return (
			<div>
				<h1>{this.props.player.fullName}</h1>
				<h4>{this.props.player.dob}</h4>
				<p>{this.props.team.name ? `${this.props.team.name} - ${this.props.team.division}` : ''}</p>
				<div>
					<label>Change Division</label>
					<DivisionSelect id={this.props.player.id} />
					<label>Change Team</label>
					<TeamSelect id={this.props.player.id} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	player: state.player.player,
	team: state.team.team
})

export default connect(mapStateToProps)(Player)