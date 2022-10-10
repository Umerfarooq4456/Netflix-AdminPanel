import {
  GET_ALL_MOVIES_FAILED,
  GET_ALL_MOVIES_LOADING,
  GET_ALL_MOVIES_SUCCESS,
} from '../actions/movie/constant';

const initialState = {
  loading: false,
  movies: [],
  error: null,
};

export const Movie = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES_LOADING:
      return { ...state, loading: true };

    case GET_ALL_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: payload };

    case GET_ALL_MOVIES_FAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
