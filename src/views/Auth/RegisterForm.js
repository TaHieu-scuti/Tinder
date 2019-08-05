import React, { Component } from 'react';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {raiseError, isRequesting, loginUserSuccess} from '../../lib/redux/actions'; 
import Card from '../Parts/Card';
import CardSection from '../Parts/CardSection';
import { Text, Button, Form, Input, Item, Label } from 'native-base';
import Loading from '../Parts/Loading';
import { styles } from '../../assets/css/LoginFormStyle';
import { Actions } from 'react-native-router-flux';

export class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.onSubmitBottom = this.onSubmitBottom.bind(this);
  }

  onSubmitBottom(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmitBottom(email, password);
  }

  renderBottom () {
    if (this.props.loading) {
      return <Loading size='small' />
    }
    return (
      <Button
        bordered
        style={styles.button}
        onPress={this.onSubmitBottom}
      >
        <Text style={styles.text}>Đăng ký</Text>
      </Button>
    );
  }

  render() {
    let error;
    if (this.props.errorDescription.length > 0) {
      error = (<CardSection><Text style={styles.errorText}>{this.props.errorDescription}</Text></CardSection>)
    }
    return (
      <Card>
        {error}
        <CardSection>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                value={this.state.email}
                onChangeText={email => this.setState({email})}
              />
            </Item>

            <Item stackedLabel last>
              <Label>PassWord</Label>
              <Input
                autoCorrect={false}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </Item>
          </Form>
        </CardSection>
        <CardSection>
          {this.renderBottom()}
        </CardSection>
        
      </Card>
    )
  }
}

const mapStateToProps = (storeState, ownProps) => {
  let newState = Object.assign(Object.assign({}, ownProps), storeState);
  newState.loading = storeState.isRequesting;
  newState.errorDescription = storeState.errorDescription;
  return newState;
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitBottom: (email, password) => {
      dispatch(isRequesting(true))
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(loginUserSuccess(user));
        Actions.main();
        dispatch(isRequesting(false));
      })
      .catch(() => {
        dispatch(raiseError('Authentication Failed.'));
        dispatch(isRequesting(false));
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
