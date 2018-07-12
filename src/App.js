import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import LoginPage from './components/login-page';
import RegisterPage from './components/register-page';
import RegisterPlayer from './components/register-player';
import Player from './components/player';
import CreateTeam from './components/create-team';
import LogoutForm from './components/logout';

export class App extends Component {
  render() {
    return (
      <div className="App flex-wrap">
      	<Route exact path="/" component={LandingPage} />
      	<Route exact path="/register" component={RegisterPage} />
      	<Route exact path="/dashboard" component={Dashboard} />
      	<Route exact path="/register-player" component={RegisterPlayer} />
        <Route path="/players/:id" component={Player} />
        <Route path="/create-team" component={CreateTeam} />
        <div className="flex-row">
          { this.props.loggedIn ? <LogoutForm /> : '' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App));
