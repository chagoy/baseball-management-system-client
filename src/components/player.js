import React from 'react';
import { connect } from 'react-redux';
import PayConfirm from './pay-confirm';
import {fetchPlayer} from '../actions/players';
import DivisionSelect from './division-select';
import TeamSelect from './team-select';
import {Link, Redirect} from 'react-router-dom';

export class Player extends React.Component {
	componentWillMount() {
		return this.props.dispatch(fetchPlayer(this.props.match.params.id))
	}

	render() {
		if (!this.props.loggedIn) {
			return <div>You are not authorized to view this page</div>;
		}

		const parentInfo = this.props.player.user ? 
		`${this.props.player.user.firstName} ${this.props.player.user.lastName}  - ${this.props.player.user.phone} - ${this.props.player.user.email}`
		: 'no parent saved';
		return (
			<div className="flex-row">
				<div className="flex-c-50">
					<h1>{this.props.player.fullName}</h1>
					<p>Date of Birth: <span className="player-text-span">{this.props.player.dob}</span></p>
					<p>Playing Age: <span className="player-text-span">{this.props.player.playingAge}</span></p>
					<p>Team: <strong>{this.props.team ? `${this.props.team.name} - ${this.props.team.division}` : 'no team'}</strong></p>
					<div>
						<h4>parent information</h4>
						<p>{parentInfo}</p>
					</div>
				</div>
				<div className="flex-c-50">
					<DivisionSelect id={this.props.player.id} />
					<TeamSelect id={this.props.player.id} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	player: state.player.player,
	team: state.team.team,
})

export default connect(mapStateToProps)(Player)