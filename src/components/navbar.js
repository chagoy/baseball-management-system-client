import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LogoutForm from './logout';
import {logout} from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
require('./navbar.css');

class Navbar extends React.Component {
	handleClick(event) {
		// event.preventDefault();
		return this.props.dispatch(logout(this.props.currentUser));
	}

	generateLinks() {
		if (this.props.loggedIn !== true) {
			return ( 
				<div>
					<Link to={'/register'}>Play</Link>
					<Link to={'/register'}>Events</Link>
					<Link to={'/register'}>Get Involved</Link>
					<Link to={'/league'}>Our League</Link>
					<Link to={'/login'}>Login</Link>
				</div>
			)
		} else {
			return (
				<div>
					<Link to={'/dashboard'}>Home</Link>
					<Link to={'/register-player'}>Register</Link>
					<Link to={'/league'}>League</Link>
					<Link to="/" onClick={e => this.handleClick(e)}>Logout</Link>
					{/*<LogoutForm/>*/}
				</div>
				)
		}
	}

	toggle() {
		let narrowLinks = document.querySelector('.narrowLinks');
		narrowLinks.classList.toggle('hidden');
	}

	render() {
		const brandLink = this.props.user.length > 0 ? '/dashboard' : '/';
		
		const links = this.generateLinks();
		
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						{links}
					</div>
        </div>

        <div className="navNarrow" onClick={this.toggle}>
        	<FontAwesomeIcon icon={faBars} color='white' />
        	<div className="narrowLinks hidden">
        		{links}
        	</div>
        </div>
			</nav>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.currentUser !== null,
	loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Navbar);