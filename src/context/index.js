import React from 'react';
import MainContextProvider from './MainContextProvider';

const ContextProvider = props => {
  return <MainContextProvider>{props.children}</MainContextProvider>;
};

export default ContextProvider;
