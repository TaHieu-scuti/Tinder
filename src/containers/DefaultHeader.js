import React from 'react';
import { Header, Left, Body, Right, Title, Icon, Button, Text } from 'native-base';
import firebase from 'firebase';
import { styles } from '../assets/css/HeaderStyles';

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    firebase.auth().signOut();
  }

  renderBottom() {
    if(this.props.loggedIn) {
      return (
        <Button
            transparent
            onPress={this.Logout}
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

export default DefaultHeader;
