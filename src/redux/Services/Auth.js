import axios from 'axios';
export const loginServices = data => axios.post('/api/register_login', data);

