import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PlayerForm from './player-form';
import Back from './back';
require('./register-player.css');

export function RegisterPlayer(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<img src="https://s3-us-west-2.amazonaws.com/am-i-going-over/neonbrand-423336-unsplash.jpg" alt="a child running to first base" className="backgroundImage ig-filter"/>
			<main className="home">
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