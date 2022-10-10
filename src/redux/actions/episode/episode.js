import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import {
  addEpisodeServices,
  deleteEpisodeServices,
  getEpisodeBySeasonIdServices,
  updateEpisodeThumbnailServices,
  updateEpisodeVideoServices,
  updateEpisodeInfoServices
} from '../../Services/Episode';
import {
  ADD_EPISODE_FAILED,
  ADD_EPISODE_LOADING,
  ADD_EPISODE_SUCCESS,
  CHANGE_EPISODE_STATUS_FAILED,
  CHANGE_EPISODE_STATUS_LOADING,
  CHANGE_EPISODE_STATUS_SUCCESS,
  GET_EPISODE_BY_SEASON_ID_FAILED,
  GET_EPISODE_BY_SEASON_ID_LOADING,
  GET_EPISODE_BY_SEASON_ID_SUCCESS,
  UPDATE_EPISODE_THUMBNAIL_FAILED,
  UPDATE_EPISODE_THUMBNAIL_LOADING,
  UPDATE_EPISODE_THUMBNAIL_SUCCESS,
  UPDATE_EPISODE_VIDEO_FAILED,
  UPDATE_EPISODE_VIDEO_LOADING,
  UPDATE_EPISODE_VIDEO_SUCCESS,
  UPDATE_EPISODE_INFO_LOADING,
  UPDATE_EPISODE_INFO_SUCCESS,
  UPDATE_EPISODE_INFO_FAILED
} from './constant';

export const addNewEpisode = (data, toast) => async dispatch => {
  try {
    dispatch({ type: ADD_EPISODE_LOADING });
    const res = await addEpisodeServices(data);
    console.log(res.data);
    dispatch({ type: ADD_EPISODE_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: ADD_EPISODE_FAILED, payload: error });
  }
};

export const getEpisodebySeasonId = (data, toast) => async dispatch => {
  try {
    dispatch({ type: GET_EPISODE_BY_SEASON_ID_LOADING });
    const res = await getEpisodeBySeasonIdServices(data);
    console.log(res.data);
    dispatch({ type: GET_EPISODE_BY_SEASON_ID_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: GET_EPISODE_BY_SEASON_ID_FAILED, payload: error });
  }
};

export const updateEpisodeThumbnail = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_EPISODE_THUMBNAIL_LOADING });
    const res = await updateEpisodeThumbnailServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_EPISODE_THUMBNAIL_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_EPISODE_THUMBNAIL_FAILED, payload: error });
  }
};

export const updateEpisodeVideo = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_EPISODE_VIDEO_LOADING });
    const res = await updateEpisodeVideoServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_EPISODE_VIDEO_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_EPISODE_VIDEO_FAILED, payload: error });
  }
};

export const updateEpisodeInfo = (data, toast) => async dispatch => {
  try {
    dispatch({ type: UPDATE_EPISODE_INFO_LOADING });
    const res = await updateEpisodeInfoServices(data);
    console.log(res.data);
    dispatch({ type: UPDATE_EPISODE_INFO_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: UPDATE_EPISODE_INFO_FAILED, payload: error });
  }
};

export const deleteEpisode = (data, toast) => async dispatch => {
  try {
    dispatch({ type: CHANGE_EPISODE_STATUS_LOADING });
    const res = await deleteEpisodeServices(data);
    console.log(res.data);
    dispatch({ type: CHANGE_EPISODE_STATUS_SUCCESS, payload: res.data });
    SuccessToaster(toast, res?.data?.message);
  } catch (error) {
    ErrorToaster(toast, error?.response?.data?.message || error?.message);
    dispatch({ type: CHANGE_EPISODE_STATUS_FAILED, payload: error });
  }
};
