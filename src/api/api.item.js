import axios from 'axios';
import { api } from "./config"
export const addItem = async(data) => {
    return await axios.post(`${api}/items/addItem`, data)
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
    return await axios.patch(`${api}/items/updateItem`, data)
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
    return await axios.get(`${api}/items/getItemsCategory/${category}`, {})
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
    return await axios.get(`${api}/items/getAllItems`)
        .then(res => {
            if (res.data.status === 'success') {
                console.log(res.data.data)
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
    return await axios.get(`${api}/items/removeItem/${id}`, {})
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