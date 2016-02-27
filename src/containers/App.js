import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AsyncApp from './AsyncApp'
import configureStore from '../configureStore'

let store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}
