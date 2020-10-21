import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Users from '../components/Users';
import { getUsers } from '../modules/users';

const UsersContainer = () => {
  const { users, loading } = useSelector(({ users, loading }) => ({
    users: users.users,
    loading: loading['users/GET_USERS'],
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <Users users={users} loading={loading} />;
};

export default UsersContainer;
