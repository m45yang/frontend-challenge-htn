import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import AsyncApp from '../containers/AsyncApp'
import htnApp from '../reducers/index'

let store = createStore(htnApp, { attendees : [] }, applyMiddleware(thunkMiddleware));

console.log(store.getState());
let App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
});

export default App
