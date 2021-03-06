import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import ReduxThunk from 'redux-thunk';
import {setHttpClient} from './actions'
import reducers from './reducers';
import axios from 'axios';

class Store extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  constructor(props) {
    super(props);
    this.state = {};

    this.store = createStore(reducers, applyMiddleware(ReduxThunk));
    /**
     * Instance of Axios
     *
     * @type {AxiosInstance}
     */
    const http = axios.create({
      baseURL: 'http://localhost',
    });
    this.store.dispatch(setHttpClient(http));
    this.props = props;
  }

  render() {
    return (
      <Provider store={this.store}>
          {this.props.children}
      </Provider>
    );
  }
}

export default Store
