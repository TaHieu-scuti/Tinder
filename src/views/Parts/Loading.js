import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

class Loading extends Component {
  static propType = {
    size: PropTypes.string
  };

  static defaultProps = {
    size: 'large'
  }
  constructor(props) {
    super(props);
    this.state={};
  }
  
  render() {
    return (
      <View style={styles.loadingStyle}>
        <ActivityIndicator size={this.props.size} />
      </View>
    )
  }
}

const styles = {
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Loading
