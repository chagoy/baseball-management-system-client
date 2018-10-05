import React from 'react';
require('./game-element.css');

export default function GameElement(props) {
	return (
		<li className="game-element">
			<div className="flex-row game-heading">
				<span className="date-time">
					{props.game.date} - {props.game.realTime}
				</span>
				<span className="location">
					{props.game.location}
				</span>
			</div>
			{console.log(props.game)}
			<p className="team-line">{props.game.away.name} <span className="record">({props.game.away.record})</span></p>
			<p className="team-line">{props.game.home.name} <span className="record">({props.game.home.record})</span></p>
			<span className="division">{props.game.away.division}</span>
		</li>
	)
}