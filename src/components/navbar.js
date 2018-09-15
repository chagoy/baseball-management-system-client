import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LogoutForm from './logout';
require('./navbar.css');

class Navbar extends React.Component {
	render() {
		const link = this.props.user.length > 0 ? '/dashboard' : '/';
		console.log(this.props.loggedIn)
		return (
			<nav className="navbar">
					<Link className="link" to={link}>Baseball</Link>
           { this.props.loggedIn !== false ? <LogoutForm /> : '' }
			</nav>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.currentUser !== null,
	loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Navbar);