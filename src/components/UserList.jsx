import React, { useCallback, useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import Axios from 'axios';

const UserList = () => {
  const { users, setUsers } = useContext(UserContext);

  const getUsers = useCallback(async () => {
    const response = await Axios('http://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  }, [setUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
