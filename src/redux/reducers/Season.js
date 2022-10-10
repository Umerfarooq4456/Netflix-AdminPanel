import {
    ADD_NEW_SEASON_LOADING,
    ADD_NEW_SEASON_SUCCESS,
    ADD_NEW_SEASON_ERROR,
    GET_ALL_SEASONS_LOADING,
    GET_ALL_SEASONS_SUCCESS,
    GET_ALL_SEASONS_FAILED,
} from '../actions/seasons/Constants'

const initialState = {
    loading: false,
    seasons: [],
    getSeasons: [],
    error: null,
};
console.log("🚀 ~ file: Seasons.jsx ~ line 16 ~ initialState", initialState)


export const Season = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_NEW_SEASON_LOADING:
            return { ...state, loading: true };
        case ADD_NEW_SEASON_SUCCESS:
            return { ...state, loading: false, series: payload };
        case ADD_NEW_SEASON_ERROR:
            return { ...state, error: payload };

        case GET_ALL_SEASONS_LOADING:
            return { ...state, loading: true };

        case GET_ALL_SEASONS_SUCCESS:
            console.log(payload)
            return { ...state, loading: false, getSeasons: payload };

        case GET_ALL_SEASONS_FAILED:
            return { ...state, loading: false, error: payload };


        default:
            return state;
    }
};