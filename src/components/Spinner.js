import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  const altText = 'Loading...';
  const styling = {
    width: '200px',
    margin: 'auto',
    display: 'block',
  };
  return (
    <Fragment>
      <img src={spinner} alt={altText} style={styling} />
    </Fragment>
  );
};
export default Spinner;
