import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestType } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestType('auth/LOGIN');

const CHANGE_FIELD = 'auth/CHANGE_FIELD';

export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

export const changeField = createAction(CHANGE_FIELD, ({ name, value }) => ({
  name,
  value,
}));

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  loginForm: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { name, value } }) => ({
      ...state,
      loginForm: {
        ...state.loginForm,
        [name]: value,
      },
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      auth: null,
      authError: error,
    }),
  },
  initialState
);

export default auth;
