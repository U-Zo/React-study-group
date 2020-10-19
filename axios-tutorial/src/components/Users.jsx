import React from 'react';

const User = ({ username, name }) => {
  return (
    <li>
      {username} ({name})
    </li>
  );
};

const Users = ({ users }) => {
  return (
    <ul>
      {users &&
        users.map((user) => (
          <User key={user.id} name={user.name} username={user.username} />
        ))}
    </ul>
  );
};

export default Users;
