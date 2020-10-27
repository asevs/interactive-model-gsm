import axios from 'axios';

export default axios.create({
  baseURL: 'http://109.95.148.51:8080/api/',
  responseType: 'json'
});
