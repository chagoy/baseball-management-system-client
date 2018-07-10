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
			{ props.user.admin ? <Link to="/create-team">Create a team</Link> : ''}
			{ props.user.admin ? <PlayersTable /> : ''}
			<LogoutForm />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	user: state.auth.currentUser
});

export default connect(mapStateToProps)(Dashboard);