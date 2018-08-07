import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form'
import Back from './back';

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />
	}

	return (
		<div className="flex-row">
			<header>
				<h1>Baseball & Softball</h1>
				<p>The fall season is just around the corner. Registration takes a couple of minutes!</p>
			</header>
				<main className="flex-row">
					<section className="flex-c-50">
						<LoginForm />
					</section>
						<aside className="flex-c-50">
							<img role="a nice picture" className="landing-img" src="https://images-na.ssl-images-amazon.com/images/I/61-yP6ZMMGL._SX522_.jpg" alt="image of pablo sanchez, all time great child baseball player" title="pablo sanchez, backyard baseball legend" />
						</aside>
				</main>
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage)