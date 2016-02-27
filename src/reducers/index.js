import { combineReducers } from 'redux'

function htnApp(state, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        attendees: action.attendees
      })
    default:
      return state
  }
}