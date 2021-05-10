import React, { useReducer } from 'react';
import { createContext } from 'use-context-selector';

export const defaultState = {
  loggedUser: null,
  users: [],
  loadingUsers: false,
};

export const mainActions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SET_USERS: 'SET_USERS',
  SET_LOADING_USERS: 'SET_LOADING_USERS',
};

export const MainContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case mainActions.LOGIN:
      console.log('LOGIN', { state, type, payload });
      const user = state?.users?.find(
        u => u.id === payload.id && u.name === payload.name
      );
      if (user) {
        return {
          ...state,
          loggedUser: user,
        };
      }
      return state;

    case mainActions.LOGOUT:
      return {
        ...state,
        loggedUser: null,
      };

    case mainActions.SET_USERS:
      console.log('SET_USERS', { state, type, payload });
      return {
        ...state,
        users: payload,
      };

    case mainActions.SET_LOADING_USERS:
      console.log('SET_LOADING_USERS', { state, type, payload });
      return {
        ...state,
        loadingUsers: payload,
      };

    default:
      break;
  }
};

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log('MAIN_CONTEXT_PROVIDER', { state });

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
