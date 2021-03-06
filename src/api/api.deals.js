import axios from 'axios';
import { api } from "./config"
export const getAllDeals= async() => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.get(`${api}/deals/getAllDeals`,{ headers: {
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
export const confirmDeal= async(id) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.patch(`${api}/deals/confirmdeal/${id}`,{},{ headers: {
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
export const declineDeal= async(id,offer_id) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.patch(`${api}/deals/declinedeal/${id}`,{offer_id},{ headers: {
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
