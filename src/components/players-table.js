import React from 'react';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import moment from 'moment';
import PayConfirm from './pay-confirm';
import {Link} from 'react-router-dom';
import './players-table.css'

export class PlayersTable extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchProtectedData());
	}

	render() {
		const playingAge = (month, day, year) => {
			let currentAge = moment([year, month - 1, day]);
			let cutoff = moment([2018, 7, 31]);
			let playingAge = cutoff.diff(currentAge, 'years', true);
			return playingAge.toFixed(3);
		};

		const players = this.props.players.map(player => 
			<tr>
				<td>{player.sport}</td>
				<td><Link to={`/players/${player.id}`}>{player.fullName}</Link></td>
				<td>{player.month}/{player.day}/{player.year}</td>
				<td>{player.playingAge}</td>
				<td>{player.division}</td>
				<td>{player.team ? player.team.name : 'no team'}</td>
				<td><PayConfirm id={player.id} paid={player.paid} /></td>
			</tr>
			);
		return (
			<div className="flex-row">
				<table>
					<thead>
						<th>Sport</th>
						<th>Name</th>
						<th>Date of Birth</th>
						<th>Playing Age</th>
						<th>Division</th>
						<th>Team</th>
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