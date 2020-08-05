import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-460a4.firebaseio.com/'
});

export default instance