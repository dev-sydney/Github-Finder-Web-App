import React from 'react';
import { Link } from 'react-router-dom';

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
  const styles = {
    width: '60px',
  };

  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={styles} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
export default UserItems;
