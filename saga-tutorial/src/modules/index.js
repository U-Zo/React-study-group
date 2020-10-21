import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import users, { usersSaga } from './users';

const rootReducer = combineReducers({
  loading,
  users,
});

export function* rootSaga() {
  yield all([usersSaga()]);
}

export default rootReducer;
