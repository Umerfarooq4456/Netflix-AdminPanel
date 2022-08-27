import axios from 'axios';
export const createSeriesServices = (data) => axios.post('/api/create_series', data);

export const getAllSeriesServices = () => axios.post('/api/get_all_series');

export const updateSeriesThumbnailServices = (data) => axios.post('/api/update_series_thumbnail', data);

export const updateSeriesTrailerServices = (data) => axios.post('/api/update_series_trailer', data);

export const deactiveSeriesServices = (data) => axios.post('/api/deactive_series', data);
