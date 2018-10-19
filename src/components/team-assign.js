import React from 'react';
import { connect } from 'react-redux';
import { getAllTeams } from '../actions/teams';
import { updateTeam, fetchAllPlayers } from '../actions/players';

export class TeamAssign extends React.Component {
	componentDidMount() {
		return Promise.all([
				this.props.dispatch(getAllTeams()),
				this.props.dispatch(fetchAllPlayers())
			])
	}

	render() {
		console.log(this.props.teams)
		console.log(this.props.players)
		let players = this.props.players;
		let optionItems = players ? players.map((player, index) => <option key={player.fullName}>{player.fullName}</option>) : 'loading';
		return (
			<div>
				<select>
					{optionItems}
				</select>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	teams: state.team.teams,
	players: state.player.players
});

export default connect(mapStateToProps)(TeamAssign)