import fetch from 'isomorphic-fetch'

/*
* Action creators
*/

export function receivePosts(json) {
  console.log('receivePosts')
  return {
    type: 'RECEIVE_POSTS',
    attendees: json.data.children.map(child => child.data)
  }
}

export function fetchPosts() {
  console.log('fetchPosts')
  return (dispatch) => {
    console.log('dispatch receivePosts')
    return fetch('https://htn-interviews.firebaseio.com/users.json')
      .then(req => req.json(), error => console.log(error))
      .then(json => dispatch(receivePosts(json)), error => console.log(error))
  }
}