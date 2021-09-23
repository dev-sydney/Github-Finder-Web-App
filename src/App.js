import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

///////////COMPONENTS-IMPORTS/////////
import NavBar from './components/layouts/NavBar';
import Users from './components/layouts/users/Users';
import SearchComponent from './components/SearchComponent';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import UserProfileComponent from './components/layouts/users/UserProfileComponent';
/////////////////////////////////////////
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
const App = () => {
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

  //clearing Users from the state
  /*  const clearUsersA = () => {
    setUsers([]);
    setLoading(false);
  }; */

  // const { users, user, loading, repos } = this.state;
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <NavBar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <SearchComponent />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  component={UserProfileComponent}
                />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
