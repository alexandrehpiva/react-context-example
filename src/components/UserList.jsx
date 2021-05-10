import React, { useContext } from 'react';
import { MainContext } from '../context/MainContextProvider';

const UserList = () => {
  const {
    state: { users },
  } = useContext(MainContext);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
