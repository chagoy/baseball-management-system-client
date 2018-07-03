import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import LoginPage from './components/login-page';
import RegisterPage from './components/register-page';
import RegisterPlayer from './components/register-player';

export class App extends Component {
  render() {
    return (
      <div className="App">
      	<Route exact path="/" component={LandingPage} />
    	<Route exact path="/register" component={RegisterPage} />
      	<Route exact path="/dashboard" component={Dashboard} />
      	<Route exact path="/register-player" component={RegisterPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App));
