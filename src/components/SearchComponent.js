import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchComponent extends Component {
  state = {
    searchInput: '',
  };
  static ProtoTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  searchInputOnChangeHandler = e => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  formSubmitHandler = e => {
    e.preventDefault();
    this.state.searchInput === ''
      ? this.props.setAlert('Please Enter Something...', 'light')
      : this.props.searchUsers(this.state.searchInput);

    this.setState({
      searchInput: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmitHandler} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search for Users..."
            value={this.state.searchInput}
            onChange={this.searchInputOnChangeHandler}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default SearchComponent;
