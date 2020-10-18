import { createStore } from 'redux';

// createStore 스토어를 만드는 함수
// 리액트 프로젝트에서는 단 하나만 만든대

const initailState = {
  counter: 0, // 우리가 저번에 했던 카운터 만들거임

  text: '', // todo list 만들거임
  list: [],
};

// Action 이름을 정의하는 것
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// =========== Action 함수
// 숫자 증가
const increase = () => ({
  type: INCREASE,
});

// 숫자 감소
const decrease = () => ({
  type: DECREASE,
});

// 폼 변경
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 리듀서로 넘겨주는 파라미터
});

// 할 일 추가
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item, // 리듀서로 넘겨주는 파라미터
});

// state라고 첫 번째 인자를 받는데
// 이 인자에다가 initialState라는 거를 지정할 거야
// 그냥 initialState라고 넣으면
// 얘를 쓸 때 불편하잖아 길잖아
// 이름을 state라고 두고 값은 initialState로 쓰겠다.
function reducer(state = initailState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state, // 기존 상태를 유지하면서 불변성 유지
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 생성
// reducer의 state와 액션함수들을 store에 담기
const store = createStore(reducer);

console.log(store.getState());

// 우리가 만든 함수
const listener = () => {
  console.log(store.getState());
};

// subscribe 함수는 dispatch 발생 시에 인자로 받은
// 콜백함수를 수행한다.
store.subscribe(listener);

// 이거 어디서 돈 주고 못 배움
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hello'));
store.dispatch(addToList({ id: 1, text: 'hello' }));
