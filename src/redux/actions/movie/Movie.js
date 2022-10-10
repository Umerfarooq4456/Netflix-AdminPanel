import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import {
  addMovieServices,
  changeMovieStatusServices,
  getAllMoviesServices,
  updateMovieInfoServices,
  updateMovieThumbnailServices,
  updateMovieTrailerServices,
  updateMovieVideoServices,
} from '../../Services/Movie';
import {
  ADD_MOVIE_FAILED,
  ADD_MOVIE_LOADING,
  ADD_MOVIE_SUCCESS,
  CHANGE_MOVIE_STATUS_FAILED,
  CHANGE_MOVIE_STATUS_LOADING,
  CHANGE_MOVIE_STATUS_SUCCESS,
  GET_ALL_MOVIES_FAILED,
  GET_ALL_MOVIES_LOADING,
  GET_ALL_MOVIES_SUCCESS,
  UPDATE_MOVIE_INFO_FAILED,
  UPDATE_MOVIE_INFO_LOADING,
  UPDATE_MOVIE_INFO_SUCCESS,
  UPDATE_MOVIE_THUMBNAIL_FAILED,
  UPDATE_MOVIE_THUMBNAIL_LOADING,
  UPDATE_MOVIE_THUMBNAIL_SUCCESS,
  UPDATE_MOVIE_TRAILER_FAILED,
  UPDATE_MOVIE_TRAILER_LOADING,
  UPDATE_MOVIE_TRAILER_SUCCESS,
  UPDATE_MOVIE_VIDEO_FAILED,
  UPDATE_MOVIE_VIDEO_LOADING,
  UPDATE_MOVIE_VIDEO_SUCCESS,
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

export const getAllMovies = (data, toast) => async dispatch => {
  try {
    dispatch({ type: GET_ALL_MOVIES_LOADING });
    const res = await getAllMoviesServices(data);
    console.log(res.data);
    dispatch({ type: GET_ALL_MOVIES_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: GET_ALL_MOVIES_FAILED, payload: error });
  }
};

export const updateMovieInfo = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_MOVIE_INFO_LOADING });
    const res = await updateMovieInfoServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_MOVIE_INFO_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_MOVIE_INFO_FAILED, payload: error });
  }
};

export const updateMovieThumbnail = (data, toast,nav) => async dispatch => {
  try {
    dispatch({ type: UPDATE_MOVIE_THUMBNAIL_LOADING });
    const res = await updateMovieThumbnailServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_MOVIE_THUMBNAIL_SUCCESS, payload: res.data });
    nav('/movies')
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_MOVIE_THUMBNAIL_FAILED, payload: error });
  }
};

export const updateMovieTrailer = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_MOVIE_TRAILER_LOADING });
    const res = await updateMovieTrailerServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_MOVIE_TRAILER_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_MOVIE_TRAILER_FAILED, payload: error });
  }
};

export const updateMovieVideo = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_MOVIE_VIDEO_LOADING });
    const res = await updateMovieVideoServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_MOVIE_VIDEO_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_MOVIE_VIDEO_FAILED, payload: error });
  }
};

export const changeMovieStatus = (data, toast) => async dispatch => {
  try {
    dispatch({ type: CHANGE_MOVIE_STATUS_LOADING });
    const res = await changeMovieStatusServices(data);
    console.log(res.data);
    dispatch({ type: CHANGE_MOVIE_STATUS_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: CHANGE_MOVIE_STATUS_FAILED, payload: error });
  }
};
