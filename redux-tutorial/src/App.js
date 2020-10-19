import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
};

export default App;
