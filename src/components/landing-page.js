import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form'
import Back from './back';
require('./landing-page.css')

export function LandingPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />
	}

	return (
		<div className="flex-row">
		<img className="backgroundImage ig-filter" alt="kids playing baseball in the summer" src="https://s3-us-west-2.amazonaws.com/am-i-going-over/neonbrand-423333-unsplash.jpg"/>
			<header className="header">
				<h1 className="headline-text">Baseball & Softball</h1>
				<p className="tagline">now accepting registrations for the spring 2019 season</p>
				<Link to={'/register'}>
					<button className="register-button">
						Register now
					</button>
				</Link>
				
			</header>
				{/*<main className="flex-row">
					<section className="flex-c-50">
						<LoginForm />
					</section>
						<aside className="flex-c-50">
							<img role="a nice picture" className="landing-img" src="https://images-na.ssl-images-amazon.com/images/I/61-yP6ZMMGL._SX522_.jpg" alt="image of pablo sanchez, all time great child baseball player" title="pablo sanchez, backyard baseball legend" />

							<p className="may-green">may green - test text test text test text test text test text test text</p>
							<p className="peach">peach - test text test text test text test text test text test text</p>
							<p className="dark-sea">dark sea - test text test text test text test text test text test text</p>
							<p className="russian-green">russian - green test text test text test text test text test text test text</p>
							<p className="flax">flax - test text test text test text test text test text test text</p>
							<p className="olive">olive - test text test text test text test text test text test text</p>
							<p className="deep-spring">deep spring - test text test text test text test text test text test text</p>
							<p className="vermillion">vermillion - test text test text test text test text test text test text</p>
							<p className="corral">corral - test text test text test text test text test text test text</p>
						</aside>
				</main>*/}
		</div>
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage)