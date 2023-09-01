import axios from "axios";

const yourAccessToken = localStorage.getItem('authToken');

const instance  = axios.create({
    baseURL: 'http://localhost:2000',
    headers: {
      'Authorization': `Bearer ${yourAccessToken}`,
      'Content-Type': 'application/json',
    },
})

export default instance