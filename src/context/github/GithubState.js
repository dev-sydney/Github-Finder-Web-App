import React from 'react';
import { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, GET_USER, GET_REPOS, SET_LOADING } from '../Types';

//import * as types from '../Types';
////////////////////////////////////////////////////////////////

const GithubState = props => {
  /* const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
 */
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
  });
  //Search User
  const searchUsersA = async text => {
    setLoading();

    const res = await github.get(`/search/users?q=${text}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //get User
  const getUser = async username => {
    setLoading();
    const res = await github.get(`/users/${username}?`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //get repos
  const getUserRepos = async username => {
    setLoading();
    const res = await github.get(
      `/users/${username}/repos?per_page=5&sort=created:asc?`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //clear users

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsersA,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
