import React from 'react';
require('./player-card.css');

export default function PlayerCard(props) {
		return (
			<div className="player-card">
				<p className="card-header">{props.player.fullName}</p>
				<p className="card-muted">{props.player.sport} - {props.player.dob}</p>
				<p className="card-body">Playing Age: {props.player.playingAge}</p>
				<p className="card-body">Division: {typeof props.player.team !== 'undefined' ? props.player.team.division : 'none'}</p>
				<p className="card-body">Team: {typeof props.player.team !== 'undefined' ? props.player.team.name : 'none'} {props.admin ? <span className='edit-text'>edit</span> : ''}</p>

			</div>
		)
}
