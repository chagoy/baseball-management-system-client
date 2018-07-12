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
		<div className="flex-row">
			<h2>Dashboard</h2>
			<div className="flex-row">
				<Link to="/register-player" className="link">Register a player</Link>
				{ props.user.admin ? <Link to="/create-team" className="link">Create a team</Link> : ''}
				{ props.user.admin ? <PlayersTable /> : ''}
			</div>
		</div>
	)
}

const mapStateToProps = state => {

	console.log(state)
	return {
		loggedIn: state.auth.currentUser !== null,
		user: state.auth.currentUser
	}
	};

export default connect(mapStateToProps)(Dashboard);