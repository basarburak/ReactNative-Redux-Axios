import React, { Component } from 'react';
import store from './config/store';
import HomeScreen from './screens/Home';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <HomeScreen />
      </Provider>
    );
  }
}