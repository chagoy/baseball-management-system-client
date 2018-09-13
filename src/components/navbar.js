import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
require('./navbar.css');

class Navbar extends React.Component {
	render() {
		const link = this.props.user.length > 0 ? '/dashboard' : '/';
		return (
			<nav className="navbar">
				<Link className="link" to={link}>Baseball</Link>
			</nav>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(Navbar);