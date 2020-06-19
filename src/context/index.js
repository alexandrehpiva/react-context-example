import React from 'react';
import LoggedUserContextProvider from './loggedUserContext';
import UserContextProvider from './userContext';

const ContextProvider = props => (
  <LoggedUserContextProvider>
    <UserContextProvider>
      {props.children}
    </UserContextProvider>
  </LoggedUserContextProvider>
);

export default ContextProvider;