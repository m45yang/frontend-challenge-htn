import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchAttendees, filterAttendees, searchAttendeesByName } from '../actions/index'
import AttendeeList from '../components/AttendeeList'
import Filter from '../components/Filter'
import Search from '../components/Search'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.filterAttendees = this.filterAttendees.bind(this)
    this.searchAttendees = this.searchAttendees.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAttendees)
  }

  searchAttendees(searchName) {
    const { dispatch } = this.props
    dispatch(searchAttendeesByName(searchName))
  }

  filterAttendees(filters, filterRatings) {
    const { dispatch } = this.props
    dispatch(filterAttendees(filters, filterRatings))
  }

  render() {
    return (
      <div>
        <Search handleSearchSubmit={ this.searchAttendees } />
        <Filter handleFilterSubmit={ this.filterAttendees } skillsFilters={ this.props.skillsFilters } filterRatings={ this.props.filterRatings }/>
        <AttendeeList attendees={ this.props.attendees }/>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  attendees: PropTypes.array.isRequired,
  skillsFilters: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

/*
* Function that filters attendees by skills.
* Allows the attendee to be displayed as long as he or
* she has all of the skills listed in skillsFilters.
*/
function filterBySkills(skillsFilters, filterRatings, obj) {
  let skills = obj.skills.map(function(skill) {
    return skill.name
  })

  let ratings = obj.skills.map(function(skill) {
    return skill.rating
  })

  for (let it=0; it < skillsFilters.length; it++) {
    let index = skills.indexOf(skillsFilters[it])
    if (index == -1) {
      return false
    } else if (ratings[index] < filterRatings[it]) {
      return false
    }
  }
  return true
}

/*
* Function that applies filters to the attendees kept in store for display.
*/
function visibleAttendees(state) {
  let attendees = state.attendees
  let skillsFilters = state.skillsFilters
  console.log(skillsFilters)
  let filterRatings = state.filterRatings
  console.log(filterRatings)
  let searchName = state.searchName

  if (skillsFilters.length != 0) {
    attendees = attendees.filter(filterBySkills.bind(this, skillsFilters, filterRatings))
    console.log(attendees.length)
  }

  if (searchName !== '') {
    attendees = attendees.filter(obj => obj.name == searchName)
  }

  return attendees
}

function mapStateToProps(state) {
  return {
    skillsFilters: state.skillsFilters,
    filterRatings: state.filterRatings,
    searchName: state.searchName,
    attendees: visibleAttendees(state)
  }
}

export default connect(mapStateToProps)(AsyncApp)