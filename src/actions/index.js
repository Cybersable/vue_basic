import axios from 'axios';

export function fetchResources() {
    return axios.get('http://localhost:8080/api/resources')
        .then(res => res.data)
}