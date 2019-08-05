import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './views/Auth/LoginForm';
import Auth from './views/Auth/Auth';
import LibraryList from './views/LibraryList';

export class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="Login" component={Auth} title="Welcome to Tinder"/>
          </Scene>
          <Scene key="main">
            <Scene
              key="libraryList"
              component={LibraryList}
              title="Library List"
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default RouterComponent
