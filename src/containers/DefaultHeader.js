import React from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { styles } from '../assets/css/HeaderStyles';

class DefaultHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left/>
        <Body>
          <Title>Tinder</Title>
        </Body>
        <Right />
      </Header>
    )
  }
};

export default DefaultHeader;
