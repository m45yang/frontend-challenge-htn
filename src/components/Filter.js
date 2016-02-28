import React, { Component, PropTypes } from 'react';
import FilterInput from './FilterInput'

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(newFilters, filterRatings) {
    const { handleFilterSubmit } = this.props
    handleFilterSubmit(newFilters, filterRatings)
  }

  render() {
    return (
      <div>
        <h3> Skills </h3>
        <FilterInput filterName="Go" 
                     filterRating="GoRating" 
                     filterInputChange={ this.handleFilterChange }
                     skillsFilters={ this.props.skillsFilters }
                     filterRatings={ this.props.filterRatings }
        />
        <FilterInput filterName="C" 
                     filterRating="CRating" 
                     filterInputChange={ this.handleFilterChange }
                     skillsFilters={ this.props.skillsFilters } 
                     filterRatings={ this.props.filterRatings }
        />
      </div>
    )
  }
}

Filter.propTypes = {
  handleFilterSubmit : React.PropTypes.func,
  skillsFilters: React.PropTypes.array,
  filterRatings: React.PropTypes.array
}