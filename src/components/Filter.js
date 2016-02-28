import React, { Component, PropTypes } from 'react';
import FilterInput from './FilterInput'

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(newFilters) {
    const { handleFilterSubmit } = this.props
    handleFilterSubmit(newFilters)
  }

  render() {
    return (
      <div>
        <h3> Skills </h3>
        { this.props.skillsFilters.map((skillFilter, index) =>
          <FilterInput key={ index }
                       filterId={ index }
                       filterName={ skillFilter.name }
                       filterRating={ skillFilter.rating }
                       filterInputChange={ this.handleFilterChange }
                       skillsFilters={ this.props.skillsFilters }
          />
        ) }
      </div>
    )
  }
}

Filter.propTypes = {
  handleFilterSubmit : React.PropTypes.func,
  skillsFilters: React.PropTypes.array,
}