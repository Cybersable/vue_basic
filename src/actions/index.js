import axios from 'axios';

export function fetchResources() {
    return axios
        .get('/api/resources')
        .then(res => res.data)
}

export function updateResources(id, resource) {
    return axios
        .patch(`/api/resources/${id}`, resource)
        .then(res => res.data)
}