import React, { Component, PropTypes } from 'react';

export default class FilterInput extends Component {
  constructor(props) {
    super(props)
    this.handleFilterInputChange = this.handleFilterInputChange.bind(this)
  }

  handleFilterInputChange() {
    console.log('handleFilterInputChange')
    let newSkillsFilters = this.props.skillsFilters
    let index = this.props.filterId
    console.log(index)

    if (this.refs.checkbox.checked) {
      newSkillsFilters[index].on = true
    } else {
      newSkillsFilters[index].on = false
    }

    newSkillsFilters[index].rating = this.refs.range.value

    const { filterInputChange } = this.props
    filterInputChange(newSkillsFilters)
  }

  render() {
    return (
      <div>
        <input type="checkbox" ref="checkbox" value={ this.props.filterName } onChange={ this.handleFilterInputChange }/>
        { this.props.filterName }, Rating: { this.props.filterRating }
        <input type="range" ref="range" min="0" max="10" defaultValue="0" onChange={ this.handleFilterInputChange }/><br/>
      </div>
    )
  }
}

FilterInput.propTypes = {
  filterInputChange : React.PropTypes.func,
  filterId: React.PropTypes.number,
  filterRating: React.PropTypes.number,
  filterName: React.PropTypes.string,
  skillsFilters: React.PropTypes.array,
}