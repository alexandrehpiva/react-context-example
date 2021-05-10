import Axios from 'axios';

const apiUrl = 'http://jsonplaceholder.typicode.com/users';

const getAll = async () => (await Axios(apiUrl)).data;

export default {
  getAll,
};
