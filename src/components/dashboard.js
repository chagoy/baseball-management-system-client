import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PlayersTable from './players-table';
import LogoutForm from './logout';
import Back from './back';

export function Dashboard(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	};

	return (
		<div>
			<div className="flex-row">
				<header>
					<h1>Dashboard</h1>
					<Link to="/register-player" className="link">Register a player</Link>
					{ props.user.admin ? <Link to="/create-team" className="link">Create a team</Link> : ''}
				</header>
			</div>
			<main>
				<div className="flex-row">
					{ props.user.admin ? <PlayersTable /> : ''}
				</div>
			</main>
			<footer>

			</footer>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null,
		user: state.auth.currentUser
	}
	};

export default connect(mapStateToProps)(Dashboard);