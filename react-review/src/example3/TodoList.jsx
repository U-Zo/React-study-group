import React, { useRef, useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: '할 일1',
    },
    {
      id: 2,
      text: '할 일2',
    },
  ]);

  const [text, setText] = useState('');

  // 스크롤 조작 이런 거 할 때는 어쩔 수 없이 사용합니다.

  let id = useRef(3);

  const addTodo = (e) => {
    e.preventDefault(); // 이미 등록되어 있는 이벤트를 무효화한다.
    setTodoList(
      todoList.concat({
        id: id.current++,
        text: text,
      })
    );

    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onDelete = (id) => {
    /**
     * filter 배열 메서드는
     * 배열 값들을 조회하여 조건식이
     * true인 애들을 모아서
     * 새로운 배열로 반환한다.
     *
     * 자동으로 불변성 법칙 지켜줌
     */
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <Todo id={todo.id} text={todo.text} onDelete={onDelete} />
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input onChange={onChange} value={text} />
      </form>
    </div>
  );
};

export default TodoList;
