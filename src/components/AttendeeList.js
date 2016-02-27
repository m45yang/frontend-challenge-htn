import React, { Component, PropTypes } from 'react';
import Attendee from './Attendee';

export default class AttendeeList extends Component {
  render() {
    return (
      <ul>
        {this.props.attendees.map(attendee =>
          <Attendee
            key={attendee.id}
            {...attendee}
          />
        )}
      </ul>
    );
  }
}

AttendeeList.propTypes = {
  attendees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired).isRequired,
  }).isRequired).isRequired
}