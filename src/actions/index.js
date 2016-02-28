import fetch from 'isomorphic-fetch'

/*
* Action creators
*/

function recieveJson(jsonArray) {
  return {
    type: 'RECEIVE_JSON',
    attendees: jsonArray
  }
}

export function fetchAttendees(dispatch) {
  let url = 'https://htn-interviews.firebaseio.com/users.json'
  return fetch(url)
    .then(req => req.json())
    .then(json => dispatch(recieveJson(json)))
}

export function filterAttendees(skillsFilters, filterRatings) {
  return {
    type: 'RECEIVE_FILTERS',
    skillsFilters: skillsFilters,
    filterRatings: filterRatings
  }
}

export function searchAttendeesByName(searchName) {
  return {
    type: 'SEARCH_NAME',
    searchName: searchName
  }
}