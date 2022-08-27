import { ADD_CATEGORY_LOADING,ADD_CATEGORY_SUCCESS,ADD_CATEGORY_FAILED, GET_ALL_CATEGORIES_LOADING, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILED, UPDATE_CATEGORY_LOADING, UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILED, ACTIVE_DEACTIVE_CATEGORY_LOADING, ACTIVE_DEACTIVE_CATEGORY_SUCCESS, ACTIVE_DEACTIVE_CATEGORY_FAILED} from './constant';
import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import { activeDeactiveCategoryServices, addCategoryServices, getAllCategoriesServices, updateCategoryServices } from '../../Services/Category';

export const addNewCategory = (data,toast) => async dispatch => {
  try {
    dispatch({ type: ADD_CATEGORY_LOADING });
    const res = await addCategoryServices(data);
    console.log(res?.data);
    dispatch({ type: ADD_CATEGORY_SUCCESS, payload: res?.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: ADD_CATEGORY_FAILED, payload: error });
  }
};

export const getAllCategories = (data,toast) => async dispatch => {
    try {
      dispatch({ type: GET_ALL_CATEGORIES_LOADING });
      const res = await getAllCategoriesServices(data);
      console.log(res?.data);
      dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: res?.data });
      // SuccessToaster(toast, res?.data?.message);
    } catch (error) {
      ErrorToaster(toast, error?.response?.data?.message || error?.message);
      dispatch({ type: GET_ALL_CATEGORIES_FAILED, payload: error });
    }
  };

  export const updateCategory = (data,toast) => async dispatch => {
    try {
      dispatch({ type: UPDATE_CATEGORY_LOADING });
      const res = await updateCategoryServices(data);
      console.log(res?.data);
      dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: res?.data });
      SuccessToaster(toast, res?.data?.message);
    } catch (error) {
      ErrorToaster(toast, error?.response?.data?.message || error?.message);
      dispatch({ type: UPDATE_CATEGORY_FAILED, payload: error });
    }
  };

  export const changeCategoryStatus = (data,toast) => async dispatch => {
    try {
      dispatch({ type: ACTIVE_DEACTIVE_CATEGORY_LOADING });
      const res = await activeDeactiveCategoryServices(data);
      console.log(res?.data);
      dispatch({ type: ACTIVE_DEACTIVE_CATEGORY_SUCCESS, payload: res?.data });
      SuccessToaster(toast, res?.data?.message);
    } catch (error) {
      ErrorToaster(toast, error?.response?.data?.message || error?.message);
      dispatch({ type: ACTIVE_DEACTIVE_CATEGORY_FAILED, payload: error });
    }
  };
  
