import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { MainContext } from '../context/MainContextProvider';

const UserList = () => {
  const {
    state: { users },
  } = useContextSelector(MainContext, v => v);

  console.log('USER_LIST', { users });

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
