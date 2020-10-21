import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createRequestSaga from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as usersAPI from '../lib/api/users';

const [GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE] = createActionTypes(
  'GET_USERS'
);

export const getUsers = createAction(GET_USERS);

const getUsersSaga = createRequestSaga(GET_USERS, usersAPI.getUser);

export function* usersSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  users: null,
  error: null,
};

const users = handleActions(
  {
    [GET_USERS_SUCCESS]: (state, { payload: users }) => ({
      ...state,
      users,
      error: null,
    }),
    [GET_USERS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      users: null,
      error,
    }),
  },
  initialState
);

export default users;
