import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../../components/HomePage/HomePage';
import AboutPage from '../../components/AboutPage/AboutPage';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import AuthService from '../../utils/AuthService';

class AppView extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    loginError: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { history, loginError, loginSuccess } = this.props;
    this.authService = new AuthService();
    // Add callback for lock's `authenticated` event
    this.authService.lock.on('authenticated', authResult => {
      this.authService.lock.getUserInfo(
        authResult.accessToken,
        (error, profile) => {
          if (error) {
            return loginError(error);
          }
          AuthService.setToken(authResult.idToken); // static method
          AuthService.setProfile(profile); // static method
          loginSuccess(profile);
          history.push({ pathname: '/' });
          this.authService.lock.hide();
        }
      );
    });
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', error => {
      loginError(error);
      history.push({ pathname: '/' });
    });
  }

  render() {
    return (
      <div>
        <Header authService={this.authService} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default AppView;
