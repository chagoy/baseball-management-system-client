import React from 'react';
import { connect } from 'react-redux';
import { fetchGames } from '../actions/games';
import GameElement from './game-element';
require('./game-element')

export class GamesList extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchGames())
	}

	render() {
		console.log(this.props.games)
		let gamesData = this.props.games.length > 0 ? this.props.games.map((game, index) => <GameElement key={index} game={game }/>) : 'loading games';
		return (
			<ul className="games-list">
				{gamesData}
			</ul>
		)
	}
}

const mapStateToProps = state => ({
	games: state.game.games
});

export default connect(mapStateToProps)(GamesList);