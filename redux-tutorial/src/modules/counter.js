// ducks 패턴

// ========= Action 타입 지정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// ========= Action 함수
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  count: 0,
};

// ========= reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
