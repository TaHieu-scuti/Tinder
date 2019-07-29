/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { Container } from 'native-base';
import DefaultFooter from './DefaultFooter';
import Router from '../Router';

class DefaultLayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderFooter() {
    if (this.props.me !== null) {
      return (<DefaultFooter />);
    }

    return;
  }

  render() {
    return (
      <Fragment>
        <Container>
            <Router />
            {this.renderFooter()}
        </Container>
      </Fragment>
    )
  };
};

const mapStateToProps = storeState => {
  return {
    me: storeState.me
  }
}

export default connect(mapStateToProps, {})(DefaultLayoutComponent);
