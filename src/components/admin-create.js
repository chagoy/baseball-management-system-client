import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import TeamForm from './team-form';
import SeasonForm from './season-form';
import GameForm from './game-form';
require('./admin-create.css')

export function AdminCreate(props) {
	if (!props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div className="create">
			<TeamForm />
			<SeasonForm />
			<GameForm />
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(AdminCreate);