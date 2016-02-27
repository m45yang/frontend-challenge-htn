import React, { PropTypes } from 'react';
import Attendee from './Attendee';

let AttendeeList = React.createClass({
  propTypes: {
    attendees : PropTypes.arrayOf(PropTypes.shape({
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
        rating: PropTypes.float.isRequired
      }).isRequired).isRequired,
    }).isRequired).isRequired,
  },

  render() {
    return (PropTypes.arrayOf(PropTypes.shape({
      <div>
        <ul>
          {attendees.map(attendee =>
            <Attendee
              key = attendee.id
              {...attendee}
            />
          )}
        </ul>
      </div>
    );
  }
});

export default AttendeeList;