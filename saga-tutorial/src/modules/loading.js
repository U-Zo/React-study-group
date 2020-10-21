import { createAction, handleActions } from 'redux-actions';

// ============== action type
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// ============== action function
// 기본 action 함수
export const startLoading = (requestType) => ({
  type: START_LOADING,
  requestType,
});

export const finishLoading = (requestType) => ({
  type: FINISH_LOADING,
  requestType,
});

// redux-actions action 함수
// export const startLoading = createAction(
//   START_LOADING,
//   (requestType) => requestType
// );

// export const finishLoading = createAction(
//   FINISH_LOADING,
//   (requestType) => requestType
// );

// ============== initialState
const initialState = {};

// ============== reducer
// 기본 reducer
const loading = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.requestType]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.requestType]: false,
      };
    default:
      return state;
  }
};

// redux-action reducer
// const loading = handleActions(
//   {
//     [START_LOADING]: (state, action) => ({
//       ...state,
//       [action.requestType]: true,
//     }),
//     [FINISH_LOADING]: (state, action) => ({
//       ...state,
//       [action.requestType]: false,
//     }),
//   },
//   initialState
// );

export default loading;
