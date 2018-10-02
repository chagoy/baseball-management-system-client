import React from 'react';
import { connect } from 'react-redux';

export class LeaguePage extends React.Component {

	render() {
		return (
			<p>league page</p>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LeaguePage)