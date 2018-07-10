import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PlayersTable from './players-table';
import LogoutForm from './logout';

export function Dashboard(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	};

	return (
		<div className="home">
			<h2>Dashboard</h2>
			<Link to="/register-player">Register a player</Link>
			<Link to="/create-team">Create a team</Link>
			<PlayersTable />
			<LogoutForm />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	// admin: state.auth.currentUser.admin != null
});

export default connect(mapStateToProps)(Dashboard);