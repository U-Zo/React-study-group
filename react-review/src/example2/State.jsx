import React, { useState } from 'react';

const State = () => {
  /**
   * state를 변경할 때는
   * 값을 직접 할당해주면 컴포넌트 업데이트가 안 됩니다.
   * 꼭 setState() 함수를 사용해야합니다.
   */
  const [count, setCount] = useState(0);

  const increase = () => {
    // count =
    setCount(1);
  };

  return (
    //
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>1로 만들기</button>
    </div>
  );
};

export default State;
