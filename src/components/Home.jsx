import React, { useCallback, useEffect } from 'react';
import Options from './Options';
import { mainActions, MainContext } from '../context/MainContextProvider';
import userService from '../services/userService';
import { useContextSelector } from 'use-context-selector';

const Home = () => {
  const {
    state: { loggedUser, loadingUsers },
    dispatch: mainDispatch,
  } = useContextSelector(MainContext, v => v);

  console.log('HOME', { loggedUser, loadingUsers });

  const getUsers = useCallback(async () => {
    // TODO: Replace those actions call by only one async (thunk) GET_USERS
    mainDispatch({
      type: mainActions.SET_LOADING_USERS,
      payload: true,
    });
    mainDispatch({
      type: mainActions.SET_USERS,
      payload: await userService.getAll(),
    });
    mainDispatch({
      type: mainActions.SET_LOADING_USERS,
      payload: false,
    });
  }, [mainDispatch]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const loginHandler = () => {
    mainDispatch({
      type: mainActions.LOGIN,
      payload: { id: 1, name: 'Leanne Graham' },
    });
  };

  const logoutHandler = () => {
    mainDispatch({ type: mainActions.LOGOUT });
  };

  return (
    <>
      <pre>{JSON.stringify(loggedUser)}</pre>
      {!loggedUser ? (
        <>
          {loadingUsers ? (
            <span>Loading users...</span>
          ) : (
            <button onClick={loginHandler}>Login</button>
          )}
        </>
      ) : (
        <>
          <div>Usuário logado: {loggedUser.name}</div>
          <button onClick={logoutHandler}>Logout</button>
          <Options />
        </>
      )}
    </>
  );
};

export default Home;
