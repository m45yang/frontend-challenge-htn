import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'

const initialState = {
  attendees : []
}

export default function rootReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'RECEIVE_POSTS':
      console.log('RECEIVE_POSTS')
      return Object.assign({}, state, {
        attendees: action.attendees
      })
    default:
      console.log('default')
      return state
  }
}