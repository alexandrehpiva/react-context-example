import React, { useCallback, useContext, useEffect } from 'react';
import Options from './Options';
import { mainActions, MainContext } from '../context/MainContextProvider';
import userService from '../services/userService';

const Home = () => {
  const {
    state: { loggedUser, loadingUsers },
    dispatch: mainDispatch,
  } = useContext(MainContext);

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
