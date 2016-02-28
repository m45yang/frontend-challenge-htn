import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'

const initialState = {
  attendees : [],
  skillsFilters: [],
  filterRatings: [],
  searchName: ''
}

export default function rootReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'RECEIVE_JSON':
      return Object.assign({}, state, {
        attendees: action.attendees
      })
    case 'RECEIVE_FILTERS':
      return Object.assign({}, state, {
        skillsFilters: action.skillsFilters,
        filterRatings: action.filterRatings
      })
    case 'SEARCH_NAME':
      return Object.assign({}, state, {
        searchName: action.searchName
      })
    default:
      return state
  }
}