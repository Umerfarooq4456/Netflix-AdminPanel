import axios from 'axios';

export const addLanguageServices = data => axios.post('/api/add_language', data);
export const getAllLanguagesServices = data => axios.post('/api/get_languages', data);
export const updateLanguageServices = data => axios.post('/api/update_language', data);
export const activeDeactiveLanguageServices = data => axios.post('/api/active_deactive_language', data);


