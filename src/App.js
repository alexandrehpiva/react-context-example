import React from 'react';
import ContextProvider from './context';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <ContextProvider>
      <Home />
    </ContextProvider>
  </div>
);

export default App;
