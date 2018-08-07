import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Dashboard} from "./dashboard";
import {connect} from "react-redux";

export class Back extends React.Component {
	render() {
		console.log(withRouter);
		return (
            <Link to="/">Back</Link>
		);
	}
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null,
        user: state.auth.currentUser
    }
};

export default connect(mapStateToProps)(Back);