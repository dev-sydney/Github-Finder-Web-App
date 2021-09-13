import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
