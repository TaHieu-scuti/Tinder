import React, { Component } from 'react';

import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export class AuthComponent extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Tabs>
          <Tab heading={ <TabHeading><Text>Đăng Nhập</Text></TabHeading>}>
            <LoginForm />
          </Tab>
          <Tab heading={ <TabHeading><Text>Đăng Ký</Text></TabHeading>}>
            <RegisterForm />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default AuthComponent
