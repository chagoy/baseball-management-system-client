import React from 'react';
import { connect } from 'react-redux';
import {fetchPlayer} from '../actions/players';
import DivisionSelect from './division-select';
import TeamSelect from './team-select';
import {Redirect} from 'react-router-dom';
import NotesForm from './add-notes';
require('./player.css')

export class Player extends React.Component {
	componentWillMount() {

		return this.props.dispatch(fetchPlayer(this.props.match.params.id));
	}

	render() {
		if (!this.props.loggedIn) {
			return <Redirect to='/' />;
		}

		const parentInfo = this.props.player.user ? 
		`${this.props.player.user.firstName} ${this.props.player.user.lastName}  - ${this.props.player.user.phone} - ${this.props.player.user.email}`
		: false;
		return (
			<div className="flex-row">
				<div className="flex-c-50">
					<h1>{this.props.player.fullName}</h1>
					<p>Date of Birth: <span className="player-text-span">{this.props.player.dob}</span></p>
					<p>Playing Age: <span className="player-text-span">{this.props.player.playingAge}</span></p>
					<p>Team: <strong>{this.props.team ? `${this.props.team.name}` : 'no team'}</strong></p>
					<p>Division: <span>{this.props.team.division}</span></p>
					<div className='parent-info'> 
						{ parentInfo ? <div><h4>Parent Information</h4><p>{parentInfo}</p></div> : 'No parent associated with this player!' }
						<h3>Parent Information</h3>
						<p>Name: <span className='player-text-span'>{this.props.player.user ? `${this.props.player.user.firstName} ${this.props.player.user.lastName}` : 'No parent name'}</span></p>
						<p>Email: <span className='player-text-span'>{this.props.player.user ? `${this.props.player.user.email}` : 'No email'}</span></p>
						<p>Phone: <span className='player-text-span'>{this.props.player.user ? `${this.props.player.user.phone}` : 'No phone saved'}</span></p>
						<p>Texting: <span className='player-text-span'>{this.props.player.user.texting ? 'Yes' : 'No'}</span></p>
						<p>Requests: <span className='player-text-span'>{this.props.player.request ? `${this.props.player.request}` : 'n/a'}</span></p>
						<h3>Admin Info</h3>
						<p>Notes: <span className='player-text-span'>{this.props.player.notes ? `${this.props.player.notes}` : 'n/a'}</span></p>

					</div>
				</div>
				<div className="flex-c-50">
					<div className='edit-padding'>
						<DivisionSelect id={this.props.player.id} />
					</div>
					<div className='edit-padding'>
						<TeamSelect id={this.props.player.id} />
					</div>
					<div className='edit-padding'>
						<NotesForm id={this.props.player.id} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	player: state.player.player,
	team: state.team.team,
})

export default connect(mapStateToProps)(Player)