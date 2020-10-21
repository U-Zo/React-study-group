import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import users, { usersSaga } from './users';

const rootReducer = combineReducers({
  users,
});

export function* rootSaga() {
  yield all([usersSaga()]);
}

export default rootReducer;
