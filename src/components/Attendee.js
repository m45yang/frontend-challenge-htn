import React, { Component, PropTypes } from 'react';

export default class Attendee extends Component {
  render() {
    return (
      <li className="list-group-item">
        <img src={ this.props.picture } /> <br/>
        <h4> Name: { this.props.name } </h4> <br/>
        <span> Email: { this.props.email } </span> <br/>
        <span> Phone Number: { this.props.phone } </span> <br/> <br/>
        <table className="table">
          <thead>
            <tr>
              <td>
                Skill name
              </td>
              <td>
                Skill rating
              </td>
            </tr>
          </thead>
          <tbody>
            { this.props.skills.map((skill, index) => 
              <tr key={ index }>
                <td>
                  { skill.name }
                </td>
                <td>
                  { skill.rating }
                </td>
              </tr>
            ) }
          </tbody>
        </table>
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