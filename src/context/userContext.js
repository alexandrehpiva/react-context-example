import React, { useState } from 'react';

export const UserContext = React.createContext();
UserContext.displayName = 'UserContext';

const UserContextProvider = props => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;