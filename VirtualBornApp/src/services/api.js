import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.2.196:3001/api'
    baseURL: 'http://172.23.149.134:3001'
    // baseURL: 'http://192.168.1.5:3001'
    //baseURL: 'http://192.168.1.7:3001/api'
})

export default api;
