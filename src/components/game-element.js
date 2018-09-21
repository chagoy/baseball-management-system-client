import React from 'react';
require('./game-element.css');

export default function GameElement(props) {
	return (
		<li className="game-element">
			<div className="flex-row game-heading">
				<span className="date-time">
					{props.game.time}
				</span>
				<span className="location">
					{props.game.location}
				</span>
			</div>
			<p className="team-line">{props.game.away.name}</p>
			<p className="team-line">{props.game.home.name}</p>
			<span className="division">{props.game.away.division}</span>
		</li>
	)
}