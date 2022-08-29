import {
  CREATE_SERIES_LOADING,
  CREATE_SERIES_FAILED,
  CREATE_SERIES_SUCCESS,
  GET_ALL_SERIES_LOADING,
  GET_ALL_SERIES_SUCCESS,
  GET_ALL_SERIES_FAILED,
  UPDATE_SERIES_THUMBNAIL_LOADING,
  UPDATE_SERIES_THUMBNAIL_SUCCESS,
  UPDATE_SERIES_THUMBNAIL_FAILED,
  UPDATE_SERIES_TRAILER_LOADING,
  UPDATE_SERIES_TRAILER_SUCCESS,
  UPDATE_SERIES_TRAILER_FAILED,
  DEACTIVE_SERIES_LOADING,
  DEACTIVE_SERIES_SUCCESS,
  DEACTIVE_SERIES_FAILED,
  UPDATE_SERIES_INFO_LOADING,
  UPDATE_SERIES_INFO_SUCCESS,
  UPDATE_SERIES_INFO_FAILED,

} from './constants';
import {
  createSeriesServices,
  deactiveSeriesServices,
  getAllSeriesServices,
  updateSeriesInfoServices,
  updateSeriesThumbnailServices,
  updateSeriesTrailerServices,
} from '../../Services/Series';
import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';

export const createSeries = (data, toast) => async dispatch => {
  try {
    dispatch({ type: CREATE_SERIES_LOADING });
    const res = await createSeriesServices(data);
    console.log(res.data);
    dispatch({ type: CREATE_SERIES_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: CREATE_SERIES_FAILED, payload: error });
  }
};

export const getAllSeries = toast => async dispatch => {
  try {
    dispatch({ type: GET_ALL_SERIES_LOADING });
    const res = await getAllSeriesServices();
    console.log(res.data);
    dispatch({ type: GET_ALL_SERIES_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: GET_ALL_SERIES_FAILED, payload: error });
  }
};

export const updateSeriesThumbnail = (data, toast) => async dispatch => {
  console.log(
    '🚀 ~ file: Series.js ~ line 44 ~ updateSeriesThumbnail ~ data',
    data
  );
  try {
    dispatch({ type: UPDATE_SERIES_THUMBNAIL_LOADING });
    const res = await updateSeriesThumbnailServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_SERIES_THUMBNAIL_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_SERIES_THUMBNAIL_FAILED, payload: error });
  }
};

export const updateSeriesTrailer = (data, toast) => async dispatch => {
  console.log(
    '🚀 ~ file: Series.js ~ line 63 ~ updateSeriesTrailer ~ data',
    data
  );

  try {
    dispatch({ type: UPDATE_SERIES_TRAILER_LOADING });
    const res = await updateSeriesTrailerServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_SERIES_TRAILER_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_SERIES_TRAILER_FAILED, payload: error });
  }
};

export const deactiveSeries = (payload, toast) => async dispatch => {
  try {
    dispatch({ type: DEACTIVE_SERIES_LOADING });
    const { data } = await deactiveSeriesServices(payload);
    dispatch({ type: DEACTIVE_SERIES_SUCCESS, payload: { data, payload } });
    SuccessToaster(toast, data?.message);
    const res = await deactiveSeriesServices(payload);
    dispatch({ type: DEACTIVE_SERIES_SUCCESS, payload: { res, payload } });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: DEACTIVE_SERIES_FAILED, payload: error });
  }
};

export const updateSeriesInfo = (payload, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_SERIES_INFO_LOADING });
    const { data } = await updateSeriesInfoServices(payload);
    dispatch({ type: UPDATE_SERIES_INFO_SUCCESS, payload: { data, payload } });
    SuccessToaster(toast, data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_SERIES_INFO_FAILED, payload: error });
  }
};
