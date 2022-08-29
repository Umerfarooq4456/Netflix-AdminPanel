import {
    ADD_NEW_SEASON_LOADING,
    ADD_NEW_SEASON_SUCCESS,
    ADD_NEW_SEASON_ERROR,
    GET_ALL_SEASON_LOADING,
    GET_ALL_SEASON_SUCCESS,
    GET_ALL_SEASON_FAILED,
} from './Constants'

import ErrorToaster from '../../../utils/toaster/ErrorToaster';
import SuccessToaster from '../../../utils/toaster/SuccessToaster';
import { addSeasonServices, getAllSeasonsServices } from '../../Services/Season';


export const addSeason = (data, toast) => async dispatch => {
    try {
        dispatch({ type: ADD_NEW_SEASON_LOADING });
        const res = await addSeasonServices(data);
        console.log(res.data);
        dispatch({ type: ADD_NEW_SEASON_SUCCESS, payload: res.data });
        SuccessToaster(toast, res?.data?.message);
    } catch (error) {
        ErrorToaster(toast, error?.response?.data?.message || error?.message);
        dispatch({ type: ADD_NEW_SEASON_ERROR, payload: error });
    }
};

export const getAllSeasons = (data, toast) => async dispatch => {
    try {
        dispatch({ type: GET_ALL_SEASON_LOADING });
        const res = await getAllSeasonsServices(data);
        console.log(res.data);
        dispatch({ type: GET_ALL_SEASON_SUCCESS, payload: res.data });
        SuccessToaster(toast, res?.data?.message);
    } catch (error) {
        ErrorToaster(toast, error?.response?.data?.message || error?.message);
        dispatch({ type: GET_ALL_SEASON_FAILED, payload: error });
    }
};