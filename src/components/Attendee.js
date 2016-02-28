import React, { Component, PropTypes } from 'react';

export default class Attendee extends Component {
  render() {
    return (
      <li>
        { this.props.name } <br/>
        { this.props.skills.map(skill => 
          <p>{ skill.name }: { skill.rating }</p>
        ) }
      </li>
    )
  }
}

Attendee.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired).isRequired,
}