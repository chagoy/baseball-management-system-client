import React from 'react';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import PayConfirm from './pay-confirm';
import {Link} from 'react-router-dom';
import './players-table.css'

export class PlayersTable extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchProtectedData());
	}

	render() {
		const players = this.props.players.map(player => 
			<tr>
				<td>{player.sport}</td>
				<td><Link to={`/player/${player.id}`}>{player.fullName}</Link></td>
				<td>{player.month}/{player.day}/{player.year}</td>
				<td>{player.playingAge}</td>
				<td>{player.certificate ? <a href={player.certificate}>Yes</a> : 'No'}</td>
				<td>{player.team ? player.team.division : player.division}</td>
				<td>{player.jersey ? player.jersey.toUpperCase() : 'none'}</td>
				<td>{player.team ? player.team.name : 'no team'}</td>
				<td>{player.request ? player.request : 'n/a'}</td>
				<td><PayConfirm id={player.id} paid={player.paid} /></td>
			</tr>
			);
		return (
			<div className="flex-row">
				<table className="table">
					<thead>
						<th>Sport</th>
						<th>Name</th>
						<th>Date of Birth</th>
						<th>Playing Age</th>
						<th>Birth Certificate?</th>
						<th>Division</th>
						<th>Jersey</th>
						<th>Team</th>
						<th>Request</th>
						<th>Paid?</th>
					</thead>
					<tbody>
						{players}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	players: state.protectedData.players
});

export default connect(mapStateToProps)(PlayersTable);