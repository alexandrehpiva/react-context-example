import React from 'react';
import ContextProvider from './context';
import Home from './components/Home';

const App = () => {
  console.log('APP');

  return (
    <div className="App">
      <ContextProvider>
        <Home />
      </ContextProvider>
    </div>
  );
};

export default App;
