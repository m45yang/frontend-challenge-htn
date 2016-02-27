import fetch from 'isomorphic-fetch'

/*
* Action creators
*/

function receivePosts(json) {
  return {
    type: 'RECEIVE_POSTS',
    attendees: json
  }
}

export function fetchPosts(dispatch) {
  let url = 'https://htn-interviews.firebaseio.com/users.json'
  return fetch(url)
    .then(req => req.json(), error => console.log(error))
    .then(json => dispatch(receivePosts(json)), error => console.log(error))
}