import React, { Component, PropTypes } from 'react';

export default class Attendee extends Component {
  render() {
    return (
      <li>
        {name}: {email}
      </li>
    )
  }
}

Attendee.propTypes: {
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
},