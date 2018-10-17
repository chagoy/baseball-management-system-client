import React from 'react';
import { Link } from 'react-router-dom';

export default function StandingsRow(props) {
	return (
		<tr className='team-row'>
			<td className='team-name'><Link to={`/team/${props.team._id}`}>{props.team.name}</Link></td>
			<td>{props.team.wins}</td>
			<td>{props.team.losses}</td>
			<td>{props.team.draws}</td>
			<td>{props.team.gamesBack}</td>
		</tr>
	)
}