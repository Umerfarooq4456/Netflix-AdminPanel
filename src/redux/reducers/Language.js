import { GET_ALL_LANGUAGES_FAILED, GET_ALL_LANGUAGES_LOADING, GET_ALL_LANGUAGES_SUCCESS } from "../actions/language/constant";

  
  const initialState = {
    loading: false,
    allLanguages: null,
    error: null,
  };
  
  export const Language = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_LANGUAGES_LOADING:
        return { ...state, loading: true };
      case GET_ALL_LANGUAGES_SUCCESS:
        return { ...state, loading: false, allLanguages: payload };
      case GET_ALL_LANGUAGES_FAILED:
        return { ...state, loading: false, error: payload };
  
      default:
        return state;
    }
  };
  