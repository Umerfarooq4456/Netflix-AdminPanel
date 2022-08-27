import { combineReducers } from 'redux';
import { Auth } from './Auth';
import { Series } from './Series';
export const rootReducer = combineReducers({
  Auth,
  Series,
});
