import axios from 'axios';
// import { useGlobalContext } from '../context/GlobalProvider';

// const {token} = useGlobalContext();
// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  // headers: {
  //   'Authorization': 'Bearer ' + token
  // },
  timeout: 100000,
});

export default apiClient