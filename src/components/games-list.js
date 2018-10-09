import React from 'react';
import { connect } from 'react-redux';
import { fetchGames, selectedGameSuccess } from '../actions/games';
import { Link } from 'react-router-dom';
import GameElement from './game-element';
import Loading from './loading';
require('./game-element')

export class GamesList extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchGames())
	}

	handleClick(game) {
		console.log(game)
		return this.props.dispatch(selectedGameSuccess(game.game))
	}

	render() {
		
		// let gamesData = this.props.games.length > 0 ? this.props.games.map((game, index) => <Link onClick={e => this.handleClick({game})} key={index} to={`/game/${game.id}`}><GameElement key={ index } game={ game }/></Link>) : 'Loading games...';
        let gamesData = this.props.games.length > 0 ? this.props.games.map((game, index) => <GameElement key={ index } game={ game }/>) : <Loading message={'Waiting for games'} />;

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