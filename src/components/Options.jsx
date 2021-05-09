import React, { useState } from 'react';
import UserList from './UserList';

const Options = () => {
  const [showUserList, setShowUserList] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowUserList(!showUserList)}>
        {showUserList ? 'Ocultar' : 'Exibir'} usuários
      </button>
      {showUserList && <UserList />}
    </>
  );
};

export default Options;
