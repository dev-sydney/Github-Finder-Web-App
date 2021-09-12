import React, { Fragment, Component } from 'react';
import axios from 'axios';
import './App.css';

///////////COMPONENTS-IMPORTS/////////
import NavBar from './components/layouts/NavBar';
import Users from './components/layouts/users/Users';
import SearchComponent from './components/SearchComponent';
import Alert from './components/layouts/Alert';
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  /* async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data,
      loading: false,
    });
  } */

  searchUsersA = async text => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
    });
  };
  //clearing Users from the state
  clearUsersA = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };
  setAlertA = (message, type) => {
    this.setState({ alert: { message: message, type: type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <NavBar />
        <Alert alert={this.state.alert} />
        <div className="container">
          <SearchComponent
            searchUsers={this.searchUsersA}
            clearUsers={this.clearUsersA}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlertA}
          />
          <Users loadState={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
/* 
styling for the spinner

styling for the submit button
  


styling for the userscontainer container









 */
