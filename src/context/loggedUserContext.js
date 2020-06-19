import React, { useState } from 'react';

export const LoggedUserContext = React.createContext();
LoggedUserContext.displayName = 'LoggedUserContext';

export const defaultUser = { id: 0, name: '' };

const LoggedUserContextProvider = props => {
  const [loggedUser, setLoggedUser] = useState(defaultUser);

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {props.children}
    </LoggedUserContext.Provider>
  );
};

export default LoggedUserContextProvider;