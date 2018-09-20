import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
require('./player-card.css');

export default function PlayerCard(props) {
	console.log(props.player)
		return (
			<div className="player-card">
				<p className="card-header">{props.player.fullName}</p>
				<p className="card-muted">{props.player.sport} - {props.player.dob}</p>
				<p className="card-body">Playing Age: {props.player.playingAge}</p>
				<p className="card-body">Division: {typeof props.player.team !== 'undefined' ? props.player.team.division : 'none'}</p>
				<p className="card-body">Team: {typeof props.player.team !== 'undefined' ? props.player.team.name : 'none'}</p>
				
			</div>
		)
}
