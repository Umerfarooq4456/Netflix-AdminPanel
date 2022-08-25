import {
  CREATE_SERIES_LOADING,
  CREATE_SERIES_FAILED,
  CREATE_SERIES_SUCCESS,
  GET_ALL_SERIES_LOADING,
  GET_ALL_SERIES_SUCCESS,
  GET_ALL_SERIES_FAILED
} from './constants';
import { createSeriesServices, getAllSeriesServices } from '../../Services/Series';

export const createSeries = (data, nav) => async dispatch => {
  try {
    dispatch({ type: CREATE_SERIES_LOADING });
    const res = await createSeriesServices(data);
    console.log(res.data);
    dispatch({ type: CREATE_SERIES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: CREATE_SERIES_FAILED, payload: error });
  }
};



export const getAllSeries = () => async dispatch => {
  try {
    dispatch({ type: GET_ALL_SERIES_LOADING });
    const res = await getAllSeriesServices();
    console.log(res.data);
    dispatch({ type: GET_ALL_SERIES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_SERIES_FAILED, payload: error });
  }
};
