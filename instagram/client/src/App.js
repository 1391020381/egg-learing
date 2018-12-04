import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import store from './store/index.js'

import Instagram from './pages/index.js'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Instagram />
      </Provider>
    );
  }
}

export default App;
