import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import TeamForm from './team-form';

export function CreateTeam(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div>
			<h2>Create A Team</h2>
			<TeamForm />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(CreateTeam);