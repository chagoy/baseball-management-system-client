import React from 'react';

export default function StandingsRow(props) {
	return (
		<tr>
			<td>{props.team.name}</td>
			<td>{props.team.wins}</td>
			<td>{props.team.losses}</td>
			<td>{props.team.draws}</td>
			<td>{props.team.gamesBack}</td>
		</tr>
	)
}