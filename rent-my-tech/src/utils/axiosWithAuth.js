import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL:"https://kayode94-rentmytech.herokuapp.com/users/user",
        headers: {
            Authorization: token
        }
    });
}