import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchSubmit() {
    const { handleSearchSubmit } = this.props
    let searchName = this.refs.searchName.value
    console.log(searchName)
    handleSearchSubmit(searchName)
  }

  render() {
    return (
      <div>
        <h3> Search by name </h3>
        <form>
          <input type="text" ref="searchName" />
          <button onClick={ this.handleSearchSubmit }> Search! </button>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearchSubmit : React.PropTypes.func
}