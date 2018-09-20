import React from 'react';
import { connect } from 'react-redux';
import PlayersTable from './players-table'
require('./admin-page.css');

export class AdminPage extends React.Component {
	render() {
		return (
			<div className="admin-view">
				<PlayersTable />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	user: state.auth.currentUser,
	players: state.protectedData.players
});

export default connect(mapStateToProps)(AdminPage)