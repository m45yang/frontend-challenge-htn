import { combineReducers } from 'redux'

const initialState = {
  attendees : []
}

export default function htnApp(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        attendees: action.attendees
      })
    default:
      return state
  }
}