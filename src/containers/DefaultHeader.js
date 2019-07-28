import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../lib/redux/actions';
import { Header, Left, Body, Right, Title, Button, Text } from 'native-base';
import firebase from 'firebase';
import { styles } from '../assets/css/HeaderStyles';

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBottom() {
    if(this.props.loggedIn) {
      return (
        <Button
            transparent
            onPress={() => this.props.Logout()}
          >
            <Text>Logout</Text>
          </Button>
      );
    }

    return;
  }

  render() {
    return (
      <Header>
        <Left/>
        <Body>
          <Title>Tinder</Title>
        </Body>
        <Right>
         {this.renderBottom()}
        </Right>
      </Header>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    Logout: () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps)(DefaultHeader);
