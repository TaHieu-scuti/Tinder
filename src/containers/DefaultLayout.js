/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import DefaultHeader from './DefaultHeader';
import LibraryList from '../views/LibraryList';
import { styles } from '../assets/css/DefaultLayoutStyles';

class DefaultLayoutComponent extends React.Component {
  
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <DefaultHeader />
            
            <View style={styles.body}>
              <LibraryList />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    )
  };
};

export default DefaultLayoutComponent;
