import axios from 'axios';
import { api } from "./config"
export const getOffers= async() => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/offers/getAllOffers`,{ headers: {
        authorization: 'Bearer ' + accessToken }})
    .then(res => {
            if (res.data.status === 'success') {
                return res.data

            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}

export const removeOffer = async(id) => {    
    const accessToken = localStorage.getItem('authToken');

    return await axios.delete(`${api}/offers/removeOffer/${id}`,{ headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return true
            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}

export const addOffer = async(data) => {    
    const accessToken = localStorage.getItem('authToken');

    return await axios.post(`${api}/offers/addOffer`,data,{ headers: {
        authorization: 'Bearer ' + accessToken }})
        .then(res => {
            if (res.data.status === 'success') {
                return true
            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}