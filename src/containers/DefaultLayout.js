/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View
} from 'react-native';
import { Container, Content } from 'native-base';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import LibraryList from '../views/LibraryList';
import { styles } from '../assets/css/DefaultLayoutStyles';
import Navigation from '../navigations/';

class DefaultLayoutComponent extends React.Component {
  
  render() {
    return (
      <Fragment>
        <Container>
          <DefaultHeader />
          <Content>
            <LibraryList />
          </Content>
          <DefaultFooter />
        </Container>
      </Fragment>
    )
  };
};

export default DefaultLayoutComponent;
