import React from 'react';
import MainContextProvider from './MainContextProvider';

const ContextProvider = props => {
  console.log('CONTEXT_PROVIDER');

  return <MainContextProvider>{props.children}</MainContextProvider>;
};

export default ContextProvider;
