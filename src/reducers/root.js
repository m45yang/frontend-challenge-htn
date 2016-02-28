import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'

const initialState = {
  attendees : [],
  skillsFilters: [
    {
      'name': 'C',
      'on': false,
      'rating': 0
    },
    {
      'name': 'Go',
      'on': false,
      'rating': 0
    },
    {
      'name': 'C++',
      'on': false,
      'rating': 0
    },
    {
      'name': 'Java',
      'on': false,
      'rating': 0
    },
    {
      'name': 'HTML/CSS',
      'on': false,
      'rating': 0
    },
    {
      'name': 'JS',
      'on': false,
      'rating': 0
    },
    {
      'name': 'Angular',
      'on': false,
      'rating': 0
    },
    {
      'name': 'NodeJS',
      'on': false,
      'rating': 0
    },
    {
      'name': 'iOS',
      'on': false,
      'rating': 0
    },
    {
      'name': 'Android',
      'on': false,
      'rating': 0
    },
    {
      'name': 'Public Speaking',
      'on': false,
      'rating': 0
    },
    {
      'name': 'Product Design',
      'on': false,
      'rating': 0
    },
  ],
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
        skillsFilters: action.skillsFilters
      })
    case 'SEARCH_NAME':
      return Object.assign({}, state, {
        searchName: action.searchName
      })
    default:
      return state
  }
}