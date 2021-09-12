import React from 'react';
import UserItems from './UserItems';
import Spinner from '../../Spinner';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

const Users = ({ users, loadState }) => {
  if (loadState) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;

//The reason for not using Array.forEach() is
//In react the way to output multiple items to render an array
//And Array.forEach() doesn't return a new array so Array.map() is used instead

/* 

constructor() {
    super();
    this.state = {
      users: [
        {
          login: 'mojombo',
          id: 1,
          node_id: 'MDQ6VXNlcjE=',
          avatar_url: ' https://avatars.githubusercontent.com/u/1?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/mojombo',
          html_url: 'https://github.com/mojombo',
          followers_url: 'https://api.github.com/users/mojombo/followers',
          following_url:
            'https://api.github.com/users/mojombo/following{/other_user}',
          gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/mojombo/subscriptions',
          organizations_url: 'https://api.github.com/users/mojombo/orgs',
          repos_url: 'https://api.github.com/users/mojombo/repos',
          events_url: ' https://api.github.com/users/mojombo/events{/privacy}',
          received_events_url:
            ' https://api.github.com/users/mojombo/received_events',
          type: 'User',
          site_admin: false,
        },
        {
          login: 'defunkt',
          id: 2,
          node_id: 'MDQ6VXNlcjI=',
          avatar_url: ' https://avatars.githubusercontent.com/u/2?v=4',
          gravatar_id: '',
          url: ' https://api.github.com/users/defunkt',
          html_url: 'https://github.com/defunkt',
          followers_url: ' https://api.github.com/users/defunkt/followers',
          following_url:
            'https://api.github.com/users/defunkt/following{/other_user}',
          gists_url: ' https://api.github.com/users/defunkt/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/defunkt/subscriptions',
          organizations_url: 'https://api.github.com/users/defunkt/orgs',
          repos_url: 'https://api.github.com/users/defunkt/repos',
          events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/defunkt/received_events',
          type: 'User',
          site_admin: false,
        },
        {
          login: 'pjhyett',
          id: 3,
          node_id: 'MDQ6VXNlcjM=',
          avatar_url: ' https://avatars.githubusercontent.com/u/3?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/pjhyett',
          html_url: 'https://github.com/pjhyett',
          followers_url: 'https://api.github.com/users/pjhyett/followers',
          following_url:
            ' https://api.github.com/users/pjhyett/following{/other_user}',
          gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
          subscriptions_url:
            ' https://api.github.com/users/pjhyett/subscriptions',
          organizations_url: ' https://api.github.com/users/pjhyett/orgs',
          repos_url: ' https://api.github.com/users/pjhyett/repos',
          events_url: ' https://api.github.com/users/pjhyett/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/pjhyett/received_events',
          type: 'User',
          site_admin: false,
        },
      ],
    };
  }
 */
