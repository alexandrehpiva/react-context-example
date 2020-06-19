import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import Axios from 'axios';

const UserList = () => {
  const { users, setUsers } = useContext(UserContext);

  const getUsers = async () => {
    const response = await Axios('http://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default UserList;