import { connect } from 'react-redux'
import AttendeeList from '../components/AttendeeList'

const mapStateToProps = (state) => {
  return {
    todos: state.attendees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const VisibleAttendeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeeList)

export default VisibleAttendeeList