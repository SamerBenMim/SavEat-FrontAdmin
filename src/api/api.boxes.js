import axios from 'axios';
import { api } from "./config"
export const getBoxes= async() => {

    return await axios.get(`${api}/boxes/getAllBoxes`)
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

// export const updateItem = async(data) => {
//     return await axios.patch(`${api}/items/updateItem`, data)
//         .then(res => {
//             if (res.data.status === 'success') {
//                 return true

//             } else {
//                 return false
//             }
//         })
//         .catch(err => {
//             return false;
//         });
// }

// export const getItemsCategory = async(category) => {
//     return await axios.get(`${api}/items/getItemsCategory/${category}`, {})
//         .then(res => {
//             if (res.data.status === 'success') {
//                 return (res.data.data)

//             } else {
//                 return false
//             }
//         })
//         .catch(err => {
//             return false;
//         });
// }

export const removeBox = async(id) => {    

    return await axios.delete(`${api}/boxes/removeBox/${id}`)
        .then(res => {
            console.log('in fn')
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

export const addBox = async(data) => {    

    return await axios.post(`${api}/boxes/addBox`,data)
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