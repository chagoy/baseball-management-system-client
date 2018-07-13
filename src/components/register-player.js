import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PlayerForm from './player-form';
import Back from './back';

export function RegisterPlayer(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<main className="whatever">
				<h1>Register a player</h1>
				<p>Please complete the form.</p>
				<PlayerForm />
			</main>
			<footer>
			{ props.loggedIn ? <Back /> : '' }
			</footer>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPlayer);