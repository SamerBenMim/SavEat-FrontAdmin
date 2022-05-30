import axios from 'axios';
import { api } from "./config"


export const addItem = async(data) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.post(`${api}/items/addItem`, data,{ headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return true

            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}

export const updateItem = async(data) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.patch(`${api}/items/updateItem`, data,{ headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return true

            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}

export const getItemsCategory = async(category) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/items/getItemsCategory/${category}`, { headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return (res.data.data)

            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}


export const getItems = async() => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/items/getAllItems`,{ headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return (res.data.data)

            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}


export const removeItem = async(id) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/items/removeItem/${id}`, { headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return true
            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}