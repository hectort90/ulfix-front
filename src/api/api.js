import Vue from 'vue'

export default {
    login (email, password) {
        let body = {
            email,
            password
        };
        return Vue.axios.post(`/auth/signin`, body)
    },
    getAllUsers() {
        const options = {
            headers: {
                'content-type': 'application/json',
                Authorization: `${localStorage.getItem('ulfix')}`,
            }
        };
        return Vue.axios.get(`/api/users`, options)
    },
    getUser(userId) {
        const options = {
            headers: {
                'content-type': 'application/json',
                Authorization: `${localStorage.getItem('ulfix')}`,
            }
        };
        return Vue.axios.get(`/api/users/${userId}`, options)
    },
    updateUser(userId, name, email) {
        const options = {
            headers: {
                'content-type': 'application/json',
                Authorization: `${localStorage.getItem('ulfix')}`,
            }
        };
        const body = {
            name,
            email
        }
        return Vue.axios.put(`/api/users/${userId}`,body,  options)
    },
    addUser(name, email, password) {
        const options = {
            headers: {
                'content-type': 'application/json',
                Authorization: `${localStorage.getItem('ulfix')}`,
            }
        };
        const body = {
            name,
            email,
            password
        }
        return Vue.axios.post(`/api/users/`,body,  options)
    },
    deleteUser(userId) {
        const options = {
            headers: {
                'content-type': 'application/json',
                Authorization: `${localStorage.getItem('ulfix')}`,
            }
        };
        return Vue.axios.delete(`/api/users/${userId}`,  options)
    }
}