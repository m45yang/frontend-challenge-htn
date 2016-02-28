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

  filterAttendees(filters) {
    const { dispatch } = this.props
    dispatch(filterAttendees(filters))
  }

  render() {
    return (
      <div className="container">
        <Search handleSearchSubmit={ this.searchAttendees } />
        <div className="row">
          <div className="col-md-3">
            <Filter handleFilterSubmit={ this.filterAttendees } skillsFilters={ this.props.skillsFilters }/>
          </div>
          <div className="col-md-9">
            <AttendeeList attendees={ this.props.attendees }/>
          </div>
        </div>
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
function filterBySkills(skillsFilters, obj) {
  let skills = obj.skills.map(function(skill) {
    return skill.name
  })

  let ratings = obj.skills.map(function(skill) {
    return skill.rating
  })

  for (let it=0; it < skillsFilters.length; it++) {
    if (skillsFilters[it].on) {
      let index = skills.indexOf(skillsFilters[it].name)
      if (index === -1) {
        return false
      } else if (ratings[index] < skillsFilters[it].rating) {
        return false
      }
    }
  }
  return true
}

function searchFirstAndLastName(searchName, obj) {
  let nameArray = obj.name.split('')
  let searchNameArray = searchName.split('')

  for (let it=0; it<searchNameArray.length; it++) {
    if (searchName[it] !== nameArray[it]) {
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
  let searchName = state.searchName

  if (skillsFilters.length !== 0) {
    attendees = attendees.filter(filterBySkills.bind(this, skillsFilters))
  }

  if (searchName !== '') {
    attendees = attendees.filter(searchFirstAndLastName.bind(this, searchName))
  }

  return attendees
}

function mapStateToProps(state) {
  return {
    skillsFilters: state.skillsFilters,
    searchName: state.searchName,
    attendees: visibleAttendees(state)
  }
}

export default connect(mapStateToProps)(AsyncApp)