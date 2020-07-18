import axios from 'axios';

const api = axios.create({
    baseURL: 'https://manageexp.azurewebsites.net/api/',
}); 

export default api;
