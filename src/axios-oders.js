import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.instagram.com/v1/users/self/?access_token=3863864665.b4c1403.480604ce5a5040c0886e97a70dfcb881'
});

export default instance;