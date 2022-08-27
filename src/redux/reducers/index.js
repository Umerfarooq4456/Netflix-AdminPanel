import { combineReducers } from 'redux';
import { Auth } from './Auth';
import { Series } from './Series';
import { Category } from './Category';
import { Language } from './Language';
export const rootReducer = combineReducers({
  Auth,
  Series,
  Category,
  Language
});
