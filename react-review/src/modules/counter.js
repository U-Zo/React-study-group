// Action 타입 지정
// 타입에는 type: String
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action 함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

// initialState
const initialState = 0;

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
