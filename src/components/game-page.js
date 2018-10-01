import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getGame } from '../actions/games';

export class GamePage extends React.Component {
	componentDidMount() {
		if (!this.props.game) {
			console.log('no game info')
			console.log(this.props.match.params.id)
			return this.props.dispatch(getGame(this.props.match.params.id))
		}
	}
	render() {
		return (
			<div>
					hello
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	game: state.game.game
});

export default connect(mapStateToProps)(GamePage)