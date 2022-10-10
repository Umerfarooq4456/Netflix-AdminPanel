import {
  CREATE_SERIES_LOADING,
  CREATE_SERIES_FAILED,
  CREATE_SERIES_SUCCESS,
  GET_ALL_SERIES_LOADING,
  GET_ALL_SERIES_SUCCESS,
  GET_ALL_SERIES_FAILED,
  DEACTIVE_SERIES_LOADING,
  DEACTIVE_SERIES_SUCCESS,
  DEACTIVE_SERIES_FAILED,
} from '../actions/Series/constants';

const initialState = {
  loading: false,
  allSeries: null,
  error: null,
};

export const Series = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SERIES_LOADING:
      return { ...state, loading: true };
    case CREATE_SERIES_SUCCESS:
      console.log(payload)
      return { ...state, loading: false, allSeries: [...state.allSeries, payload.data]  };
    case CREATE_SERIES_FAILED:  
      return { ...state, error: payload };

    case GET_ALL_SERIES_LOADING:
      return { ...state, loading: true };

    case GET_ALL_SERIES_SUCCESS:
      return { ...state, loading: false, allSeries: payload };

    case GET_ALL_SERIES_FAILED:
      return { ...state, loading: false, error: payload };

    // case DEACTIVE_SERIES_LOADING:
    //   return { ...state, loading: true };

    // case DEACTIVE_SERIES_SUCCESS:
    //   const updatedArray = state.allSeries.series.map(series =>
    //     series?._id === payload.data._id
    //       ? { ...series, activeStatus: !series.activeStatus }
    //       : series
    //   )
    //   console.log("🚀 ~ file: Series.js ~ line 46 ~ Series ~ updatedArray", updatedArray)

    //   return { ...state, loading: false, allSeries: updatedArray };

    // case DEACTIVE_SERIES_FAILED:
    //   return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
