import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';

const rootReducer = combineReducers({
  auth,
});

export const rootSaga = function* () {
  yield all([authSaga()]);
};

export default rootReducer;
