import React from 'react';
import { connect } from 'react-redux';
import { fetchAllGames } from '../actions/games'
import GameElement from './game-element'
require('./schedule.css');

export class Schedule extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchAllGames())
	}

	render() {
		let gamesData = this.props.games.length > 0 ? this.props.games.map((game, index) => <GameElement key={ index } game={ game }/>) : 'loading games';
		return (
			<div className="schedule">
				<img src="https://s3-us-west-2.amazonaws.com/am-i-going-over/neonbrand-423338-unsplash.jpg" alt="a picture of a base" className="backgroundImage ig-filter" />
				<div className='flex-row'>
					<h1 className="schedule-title">Fall 2018 Schedule</h1>
				</div>
				<div className='flex-row'>
					<ul className="schedule-list">
						{gamesData}
					</ul>
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	games: state.game.games
});

export default connect(mapStateToProps)(Schedule)