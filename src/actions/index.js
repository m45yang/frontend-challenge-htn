import fetch from 'isomorphic-fetch'

/*
* Action creators
*/

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    attendees: json.data.children.map(child => child.data)
  }
}

function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`https://htn-interviews.firebaseio.com/users.json`)
      .then(req => req.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

function shouldFetchPosts(state) {
  const attendees = state.attendees;
  if (!posts || !posts.isFetching) {
    return true
  } else if (posts.isFetching) {
    return false
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts())
    }
  }
}