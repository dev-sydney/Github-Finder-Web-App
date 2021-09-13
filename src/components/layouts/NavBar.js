import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  //defaultProps is used to set default properties
  static defaultProps = {
    title: 'GitHub finder',
    icon: 'fab fa-github',
  };
  //the proptypes is to ensure the right data type is used
  //for the props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
