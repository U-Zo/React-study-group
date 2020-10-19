// Action 타입 지정
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// Action 함수
let id = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// initState
// 할일 목록들을 넣을 거니까 배열 타입으로 지정
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export default reducer;
