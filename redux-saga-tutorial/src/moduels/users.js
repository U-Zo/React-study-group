import { call, put, takeLatest } from 'redux-saga/effects';
import * as usersAPI from '../lib/api/users';

// ===================== action type 지정
const GET_USERS = 'GET_USERS';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

// ===================== action 함수
export const getUsers = () => ({
  type: GET_USERS,
});

// ===================== 초기 state
const initialState = {
  users: null,
  error: null,
};

// ===================== 사가 함수
function* getUsersSaga() {
  const response = yield call(usersAPI.getUsers);

  try {
    yield put({
      type: GET_USERS_SUCCESS,
      users: response.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      error: response.data,
    });
  }
}

// ===================== dispatch 감시자 사가
export function* usersSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
}

// ===================== reducer
const users = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        error: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        users: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default users;
