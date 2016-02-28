import React, { Component, PropTypes } from 'react';

export default class FilterInput extends Component {
  constructor(props) {
    super(props)
    this.handleFilterInputChange = this.handleFilterInputChange.bind(this)
  }

  handleFilterInputChange() {
    let newSkillsFilters = this.props.skillsFilters
    let newFilterRatings = this.props.filterRatings
    let index = newSkillsFilters.indexOf(this.props.filterName)

    if (index == -1) {
      index = newSkillsFilters.length
    }

    if (!this.refs.checkbox.checked) {
      newSkillsFilters.splice(index, 1)
    } else {
      newSkillsFilters[index] = this.props.filterName
    }

    newFilterRatings[index] = this.refs.range.value

    const { filterInputChange } = this.props
    filterInputChange(newSkillsFilters, newFilterRatings)
  }

  render() {
    return (
      <div>
        <input type="checkbox" ref="checkbox" value={ this.props.filterName } onChange={ this.handleFilterInputChange }/>
        { this.props.filterName }, Rating: 
        1<input type="range" ref="range" min="0" max="10" onChange={ this.handleFilterInputChange }/>10<br/>
      </div>
    )
  }
}

FilterInput.propTypes = {
  filterInputChange : React.PropTypes.func,
  filterName: React.PropTypes.string,
  filterRating: React.PropTypes.string,
  skillsFilters: React.PropTypes.array,
  filterRatings: React.PropTypes.array
}