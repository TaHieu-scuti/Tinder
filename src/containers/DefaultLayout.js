/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Container, Content, View } from 'native-base';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import LibraryList from '../views/LibraryList';
import LoginForm from '../views/Auth/LoginForm';
import Loadding from '../views/Parts/Loading';

class DefaultLayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderContent() {
    switch(this.props.loggedIn) {
      case true: return (<LibraryList />);
      case false: return <LoginForm />;
      default: return (<View><Loadding /></View>);
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <DefaultHeader loggedIn={this.props.loggedIn} />
          <Content>
            {this.renderContent()}
          </Content>
          <DefaultFooter />
        </Container>
      </Fragment>
    )
  };
};

export default DefaultLayoutComponent;
