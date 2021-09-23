import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const SearchComponent = () => {
  const [text, setText] = useState('');

  const githubContext = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const searchInputOnChangeHandler = e => {
    setText(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter Something...', 'light');
    } else {
      githubContext.searchUsersA(text);
      setText('');
    }
  };

  const clearinputField = () => {
    setText('');
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search for Users..."
          value={text}
          onChange={searchInputOnChangeHandler}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
      </form>
      {text && (
        <button className="btn btn-light btn-block" onClick={clearinputField}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
