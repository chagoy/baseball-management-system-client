import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LogoutForm from './logout';
import Back from './back';
import GamesList from './games-list';
import { fetchProtectedData } from '../actions/protected-data';
import PlayerCard from './player-card';
require('./dashboard.css');

export class Dashboard extends React.Component {
	componentDidMount() {
		return this.props.dispatch(fetchProtectedData());
	}

	render() {
		if (!this.props.loggedIn) {
			return <Redirect to="/" />;
		};

		let playerCardData = this.props.players ? this.props.players.map((player, index) => <Link key={index} to={`/player/${player.id}`}><PlayerCard key={index} player={player} /></Link>) : 'loading player cards';

		let adminLinks = this.props.user.admin ? (
			<div>
				<Link to="/create" className="link">Admin Creation</Link>
				<Link to="/admin" className="link">Table View</Link>
			</div>
		) : '';

		return (
			<div>
				<img src="https://s3-us-west-2.amazonaws.com/am-i-going-over/neonbrand-423338-unsplash.jpg" alt="a picture of a base" className="backgroundImage ig-filter" />
				{ adminLinks }
				<main className="dashboard-screen">
					<div className="flex-wrap">
						<div className="flex-row">
							<div className="flex-c-50">
								<h3 className="header-text">Hello, welcome back {this.props.user.username}</h3>
								<p>Your registered players:</p>
								{playerCardData}
							</div>
							<div className="flex-c-50">
								<h3 className="header-text">Your Upcoming Schedule</h3>
								<GamesList />
							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	user: state.auth.currentUser,
	players: state.protectedData.players
});

export default connect(mapStateToProps)(Dashboard);