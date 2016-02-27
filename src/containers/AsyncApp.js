import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions'
import AttendeeList from '../components/AttendeeList'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchPostsIfNeeded)
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