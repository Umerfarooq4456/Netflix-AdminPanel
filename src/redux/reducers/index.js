import { combineReducers } from 'redux';
import { Auth } from './Auth';
import { Series } from './Series';
import { Category } from './Category';
import { Language } from './Language';
import { Season } from './Season';
import { Episode } from './Episode';
import { Movie } from './Movie';
export const rootReducer = combineReducers({
  Auth,
  Series,
  Category,
  Language,
  Season,
  Episode,
  Movie
});
