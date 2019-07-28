import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    return (
      <View style={styles.containerStyles}>
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  containerStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}
