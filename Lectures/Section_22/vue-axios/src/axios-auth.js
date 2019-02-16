import axios from 'axios';

const instance = axios.create({
    baseURL: "https://vuejs-axios-b76b8.firebaseio.com"
});

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance