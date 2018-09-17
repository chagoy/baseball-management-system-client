import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LogoutForm from './logout';
require('./navbar.css');

class Navbar extends React.Component {

	generateLinks() {
		if (this.props.loggedIn !== true) {
			return <div className="right-side">
				<Link className="link right-side-link" to={'/register'}>Play</Link>
				<Link className="link right-side-link" to={'/register'}>Events</Link>
				<Link className="link right-side-link" to={'/register'}>Get Involved</Link>
				<Link className="link right-side-link" to={'/register'}>Our League</Link>
				<Link className="link right-side-link" to={'/login'}>Login</Link>
			</div>
		} else {
			return <div>
				<Link className="link right-side-link" to={'/register'}>My Team</Link>
				<Link className="link right-side-link" to={'/register'}>Schedule</Link>
				<Link className="link right-side-link" to={'/register'}>Standings</Link>
				<Link className="link right-side-link" to={'/register'}>League</Link>
				<Link className="link right-side-link" to={'/register'}>My Account</Link>
				<LogoutForm/>
			</div>
		}
	}

	render() {
		const brandLink = this.props.user.length > 0 ? '/dashboard' : '/';
		
		const links = this.generateLinks();
		return (
			<nav className="navbar">
					<Link className="link" to={brandLink}>Baseball</Link>

           { links }
					
			</nav>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.currentUser !== null,
	loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Navbar);