import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, receivePosts } from '../actions/index'
import AttendeeList from '../components/AttendeeList'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts)
  }

  render() {
    return (
      <div>
        <AttendeeList attendees={this.props.attendees} />
      </div>
    )
  }
}

AsyncApp.propTypes = {
  attendees: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    attendees : state.attendees
  }
}

export default connect(mapStateToProps)(AsyncApp)