import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './lib/redux/reducers';

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    );
  }
}

export default App;