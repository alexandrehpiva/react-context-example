import React, { useContext } from 'react';
import Options from './Options';
import { LoggedUserContext, defaultUser } from '../context/loggedUserContext';

const Home = () => {
  const { loggedUser, setLoggedUser } = useContext(LoggedUserContext);

  const isLogged = loggedUser.id !== 0;

  const loginHandler = () => {
    setLoggedUser({ id: 1, name: 'Alexandre' });
  };

  const logoutHandler = () => {
    setLoggedUser(defaultUser);
  };

  return (
    <>
      {!isLogged ? (
        <button onClick={loginHandler}>Login</button>
      ) : (
        <button onClick={logoutHandler}>Logout</button>
      )}
      <div>Usuário logado: {isLogged ? loggedUser.name : 'não logado'}</div>
      {isLogged && <Options />}
    </>
  );
};

export default Home;
