import React from 'react';
import { useState } from 'react';

const FuncCounter = () => {
  const [count, setCount] = useState(0);

  const increaseFunction = () => {
    setCount(count + 1);
  };

  const decreaseFunction = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseFunction}>+1</button>
      <button onClick={decreaseFunction}>-1</button>
    </div>
  );
};

export default FuncCounter;
