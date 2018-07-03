import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function Dashboard(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div className="home">
			<h2>Dashboard</h2>
			<Link to="/register-player">Register a player</Link>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);