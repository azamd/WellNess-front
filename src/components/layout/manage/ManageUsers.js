import axios from 'axios';
const API_BASE_URL = "http://localhost:8089/Wellness/users";

class ManageUsers {

    createUser(user) {
        return axios.post(API_BASE_URL + '/add-user/', user);
    }

    updateUser(user) {
        return axios.post(API_BASE_URL + '/add-user/', user);
    }

    deleteUser(userId) {
        return axios.delete(API_BASE_URL + '/deleteUser/' + userId);
    }

    getUserById(userId) {
        return axios.get(API_BASE_URL + '/retrieve-single-user/' + userId);
    }

    getUsers() {
        return axios.get(API_BASE_URL + '/full_list');
    }

}
export default new ManageUsers()