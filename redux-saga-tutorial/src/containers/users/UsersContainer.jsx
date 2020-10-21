import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Users from '../../components/users/Users';
import { getUsers } from '../../moduels/users';

const UsersContainer = () => {
  const { users } = useSelector(({ users }) => ({
    users: users.users,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <Users users={users} />;
};

export default UsersContainer;
