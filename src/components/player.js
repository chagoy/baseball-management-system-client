import React from 'react';
import { connect } from 'react-redux';
import PayConfirm from './pay-confirm';
import {fetchPlayer} from '../actions/players';

export class Player extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchPlayer(this.props.match.params.id));
	}

	render() {
		return (
			<p></p>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(Player)