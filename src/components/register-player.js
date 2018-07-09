import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PlayerForm from './player-form';

export function RegisterPlayer(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div className="whatever">
			<h2>Register a player</h2>
			<p>this is the page to register a player. you have to be logged in to see it</p>
			<PlayerForm />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPlayer);