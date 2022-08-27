import {
  ACTIVE_DEACTIVE_LANGUAGE_FAILED,
  ACTIVE_DEACTIVE_LANGUAGE_LOADING,
  ACTIVE_DEACTIVE_LANGUAGE_SUCCESS,
  ADD_LANGUAGE_FAILED,
  ADD_LANGUAGE_LOADING,
  ADD_LANGUAGE_SUCCESS,
  GET_ALL_LANGUAGES_FAILED,
  GET_ALL_LANGUAGES_LOADING,
  GET_ALL_LANGUAGES_SUCCESS,
  UPDATE_LANGUAGE_FAILED,
  UPDATE_LANGUAGE_LOADING,
  UPDATE_LANGUAGE_SUCCESS,
} from './constant';
import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import {
  activeDeactiveLanguageServices,
  addLanguageServices,
  getAllLanguagesServices,
  updateLanguageServices,
} from '../../Services/Language';

export const addNewLanguage = (data, toast) => async dispatch => {
  try {
    dispatch({ type: ADD_LANGUAGE_LOADING });
    const res = await addLanguageServices(data);
    console.log(res?.data);
    dispatch({ type: ADD_LANGUAGE_SUCCESS, payload: res?.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: ADD_LANGUAGE_FAILED, payload: error });
  }
};

export const getAllLanguages = (data, toast) => async dispatch => {
  try {
    dispatch({ type: GET_ALL_LANGUAGES_LOADING });
    const res = await getAllLanguagesServices(data);
    console.log(res?.data);
    dispatch({ type: GET_ALL_LANGUAGES_SUCCESS, payload: res?.data });
    // SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: GET_ALL_LANGUAGES_FAILED, payload: error });
  }
};

export const updateLanguage = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_LANGUAGE_LOADING });
    const res = await updateLanguageServices(data);
    console.log(res?.data);
    dispatch({ type: UPDATE_LANGUAGE_SUCCESS, payload: res?.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_LANGUAGE_FAILED, payload: error });
  }
};

export const changeLanguageyStatus = (data, toast) => async dispatch => {
  try {
    dispatch({ type: ACTIVE_DEACTIVE_LANGUAGE_LOADING });
    const res = await activeDeactiveLanguageServices(data);
    console.log(res?.data);
    dispatch({ type: ACTIVE_DEACTIVE_LANGUAGE_SUCCESS, payload: res?.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: ACTIVE_DEACTIVE_LANGUAGE_FAILED, payload: error });
  }
};
