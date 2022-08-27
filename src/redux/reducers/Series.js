import {
  CREATE_SERIES_LOADING,
  CREATE_SERIES_FAILED,
  CREATE_SERIES_SUCCESS,
  GET_ALL_SERIES_LOADING,
  GET_ALL_SERIES_SUCCESS,
  GET_ALL_SERIES_FAILED,
} from '../actions/Series/constants';

const initialState = {
  loading: false,
  series: [],
  allSeries: [],
  error: null,
};

export const Series = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SERIES_LOADING:
      return { ...state, loading: true };
    case CREATE_SERIES_SUCCESS:
      return { ...state, loading: false, series: payload };
    case CREATE_SERIES_FAILED:
      return { ...state, error: payload };

    case GET_ALL_SERIES_LOADING:
      return { ...state, loading: true };

    case GET_ALL_SERIES_SUCCESS:
      return { ...state, loading: false, allSeries: payload };

    case GET_ALL_SERIES_FAILED:
      return { ...state, error: payload };

    default:
      return state;
  }
};
