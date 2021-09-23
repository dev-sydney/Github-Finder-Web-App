import React from 'react';
import RepoItems from './ReposItems';

const ReposContainer = ({ repos }) => {
  return repos.map(repo => <RepoItems repo={repo} key={repo.id} />);
};
export default ReposContainer;
