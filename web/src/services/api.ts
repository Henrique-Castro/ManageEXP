import axios from 'axios';

const api = axios.create({
    baseURL: 'https://manageexp.azurewebsites.net/api/',
    headers: {'Content-Type': 'application/json'}
}); 

export default api;
