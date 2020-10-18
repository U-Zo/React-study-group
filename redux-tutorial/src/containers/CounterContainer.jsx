import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

// 컨테이너 컴포넌트는 데이터를 가공하여
// 렌더링할 컴포넌트에게 props로 넘긴다.
const CounterContainer = () => {
  // useState: store의 state를 고르는 함수라고 생각
  const { count } = useSelector(({ counter }) => ({
    count: counter.count,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
