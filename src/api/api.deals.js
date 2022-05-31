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
export const declineDeal= async(id) => {
    const accessToken = localStorage.getItem('authToken');

    return await axios.patch(`${api}/deals/declinedeal/${id}`,{},{ headers: {
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


// export const removeBox = async(id) => {    
//     const accessToken = localStorage.getItem('authToken');

//     return await axios.delete(`${api}/boxes/removeBox/${id}`,{ headers: {
//         authorization: 'Bearer ' + accessToken }})
//         .then(res => {
//             if (res.data.status === 'success') {
//                 return true
//             } else {
//                 return false
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             return false;
//         });
// }

// export const addBox = async(data) => {    
//     const accessToken = localStorage.getItem('authToken');

//     return await axios.post(`${api}/boxes/addBox`,data,{ headers: {
//         authorization: 'Bearer ' + accessToken }})
//         .then(res => {
//             if (res.data.status === 'success') {
//                 return true
//             } else {
//                 return false
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             return false;
//         });
// }