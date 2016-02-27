import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VisibleAttendeeList from '../containers/VisibleAttendeeList';
import htnApp from '../reducers/index'

let store = createStore(htnApp);

let App = React.createClass({
  render() {
    return (
      <div>
        <VisibleAttendeeList />
      </div>
    );
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
