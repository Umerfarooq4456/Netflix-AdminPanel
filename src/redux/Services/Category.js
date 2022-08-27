import axios from 'axios';

export const addCategoryServices = data => axios.post('/api/add_category', data);
export const getAllCategoriesServices = data => axios.post('/api/get_categories', data);
export const updateCategoryServices = data => axios.post('/api/update_category', data);
export const activeDeactiveCategoryServices = data => axios.post('/api/active_deactive_category', data);


