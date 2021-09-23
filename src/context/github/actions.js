import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});
export const searchUsersA = async text => {
  const res = await github.get(`/search/users?q=${text}`);

  return res.data.items;
};

export const getUser = async username => {
  const res = await github.get(`/users/${username}?`);

  return res.data;
};
export const getUserRepos = async username => {
  const res = await github.get(
    `/users/${username}/repos?per_page=5&sort=created:asc?`
  );

  return res.data;
};
