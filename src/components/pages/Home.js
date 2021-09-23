import React, { Fragment } from 'react';
import SearchComponent from '../SearchComponent';
import Users from '../layouts/users/Users';

const Home = () => {
  return (
    <Fragment>
      <SearchComponent />
      <Users />
    </Fragment>
  );
};
export default Home;
