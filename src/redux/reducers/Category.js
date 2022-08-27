import {
  ACTIVE_DEACTIVE_CATEGORY_FAILED,
  ACTIVE_DEACTIVE_CATEGORY_LOADING,
  ACTIVE_DEACTIVE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_FAILED,
  GET_ALL_CATEGORIES_LOADING,
  GET_ALL_CATEGORIES_SUCCESS,
} from '../actions/category/constant';

const initialState = {
  loading: false,
  allCategories: null,
  error: null,
};

export const Category = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CATEGORIES_LOADING:
      return { ...state, loading: true };
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, loading: false, allCategories: payload };
    case GET_ALL_CATEGORIES_FAILED:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
