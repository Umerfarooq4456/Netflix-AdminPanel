import axios from 'axios';
export const createSeriesServices = data =>
  axios.post('/api/create_series', data);

  export const getAllSeriesServices =() =>
  axios.post('/api/get_all_series');