import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';

class CardSection extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
}

export default CardSection
