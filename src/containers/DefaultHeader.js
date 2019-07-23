import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import { styles } from '../assets/css/HeaderStyles';

class DefaultHeader extends React.Component {
  render() {
    return (
      <ImageBackground
        accessibilityRole={'image'}
        source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
        style={styles.background}
        imageStyle={styles.logo}>
        <Text style={styles.text}>Welcome to Tinder App</Text>
      </ImageBackground>
    )
  }
};

export default DefaultHeader;
