import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import { addMovieServices } from '../../Services/Movie';
import {
  ADD_MOVIE_FAILED,
  ADD_MOVIE_LOADING,
  ADD_MOVIE_SUCCESS,
} from './constant';

export const addNewMovie = (data, toast) => async dispatch => {
  try {
    dispatch({ type: ADD_MOVIE_LOADING });
    const res = await addMovieServices(data);
    console.log(res.data);
    dispatch({ type: ADD_MOVIE_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: ADD_MOVIE_FAILED, payload: error });
  }
};
