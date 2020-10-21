import React from 'react';

const User = ({ id, username }) => {
  return (
    <li>
      {id}: {username}
    </li>
  );
};

const Users = ({ users, loading }) => {
  return (
    <div>
      <ul>
        {!loading &&
          users &&
          users.map((user) => <User id={user.id} username={user.username} />)}
      </ul>
    </div>
  );
};

export default Users;
