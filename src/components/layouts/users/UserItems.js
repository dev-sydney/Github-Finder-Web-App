import React from 'react';

const UserItems = ({ user: { login, avatar_url, html_url } }) => {
  const styles = {
    width: '60px',
  };

  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={styles} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};
export default UserItems;
