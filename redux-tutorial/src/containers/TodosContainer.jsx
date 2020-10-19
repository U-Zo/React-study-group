import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
  const todos = useSelector(({ todos }) => todos);

  const dispatch = useDispatch();

  const onCreate = (text) => {
    dispatch(addTodo(text));
  };

  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos onCreate={onCreate} onToggle={onToggle} todos={todos} />;
};

export default TodosContainer;
