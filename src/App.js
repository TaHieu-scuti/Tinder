import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './lib/redux/reducers';
import firebase from 'firebase';
import DefaultLayout from './containers/DefaultLayout';
import Store from './lib/redux/';

const store = createStore(reducers);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLQLbdEWigjT-g3m_bkXZRmYRqxtSd7Bs",
      authDomain: "hieu-marioplan.firebaseapp.com",
      databaseURL: "https://hieu-marioplan.firebaseio.com",
      projectId: "hieu-marioplan",
      storageBucket: "hieu-marioplan.appspot.com",
      messagingSenderId: "305501739654",
      appId: "1:305501739654:web:9ec6a6c31811ba8c"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Store>
        <DefaultLayout loggedIn={this.state.loggedIn} />
      </Store>
    );
  }
}

export default App;