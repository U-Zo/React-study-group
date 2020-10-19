import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Users from '../components/Users';

const UsersContainer = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);
      setLoading(true);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/showmeerror'
      );

      setUsers(response.data);
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    // setError(null);
    // setUsers(null);
    // setLoading(true);

    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => {
    //     const users = response.data;
    //     setUsers(users);
    //   })
    //   .catch((e) => setError(e))
    //   .finally(() => setLoading(false));
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return <Users users={users} />;
};

export default UsersContainer;
