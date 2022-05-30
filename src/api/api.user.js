import axios from 'axios';
import { api } from "./config"
export const login = async(data) => {
    return await axios.post(`${api}/users/login`, data)
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.setItem('authToken', res.data.token);
                return true

            } else {
                return false
            }
        })
        .catch(err => {
            return false;
        });
}

export const signUp = async(data) => {
    return await axios.post(`${api}/users/signup`, data)
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.setItem('accessToken', res.data.accessToken);
                return "true";
            } else if (res.data.status === 'error') {
                return res.data.error;
            }
        })
        .catch(err => {
            return false;
        });
}
export const updateUser = async(data) => {
    const accessToken = localStorage.getItem('authToken');
    return await axios.patch(`${api}/users/updateMe`, data, { headers: {
        authorization: 'Bearer ' + accessToken
    }
    })
    .then(res => {
           
            if (res.data.status === 'success') {
                return res.data.data.updatedUser;
            } else if (res.data.status === 'error') {
                return res.data.error;
            }
        })
        .catch(err => {console.log(err)
            return false;
        });
}
export const updatePassword = async(data) => {
    const accessToken = localStorage.getItem('authToken');
    return await axios.patch(`${api}/users/updatePassword`, data, { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
.then(res => {
   
    localStorage.setItem('authToken', res.data.token);
    if (res.data.status === 'success') {
      
        return true;
    } else if (res.data.status === 'error') {
        return res.data.error;
    }
})
.catch(err => {console.log(err)
    return false;
        });
}
export const updateEmail = async(data) => {
   
    const accessToken = localStorage.getItem('authToken');
    return await axios.patch(`${api}/users/updateEmail`, data, { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
.then(res => {
 
    if (res.data.status === 'success') {
    
        return true;
    } else if (res.data.status === 'error') {
        return res.data.error;
    }
})
.catch(err => {console.log(err)
    return false;
        });
}
export const verifyEmail = async(data) => {

    const accessToken = localStorage.getItem('authToken');
    return await axios.patch(`${api}/users/verifyEmail`, data, { headers: {
        authorization: 'Bearer ' + accessToken
    }
})
.then(res => {
    
    if (res.data.status === 'success') {
       
        return res.data.data.updatedUser;
    } else if (res.data.status === 'error') {
        return res.data.error;
    }
})
.catch(err => {console.log(err)
    return false;
        });
}

export const verifySignup = async(data) => {
    const accessToken = localStorage.getItem('accessToken');
    return await axios.post(`${api}/users/verifyAccount`, data, {
            headers: {
                access: 'Bearer ' + accessToken
            }
        })
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.setItem('authToken', res.data.token);
                return "true";
            } else if (res.data.status === 'error') {
                return res.data.error;
            }
        })
        .catch(err => {
            return false;
        });
}

export const logout = async() => {
    const authToken = localStorage.getItem('authToken');
    return await axios.post(`${api}/users/logout`, {}, {
            headers: {
                authorization: 'Bearer ' + authToken
            }
        })
        .then(res => {
            if (res.data.status === 'success') {
                localStorage.removeItem('authToken');
                return true;
            }
        })
        .catch(err => {
            return false;
        });
}
export const forgotPassword = async(data) => {
    return axios.post(`${api}/users/forgotPassword`, data)
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

export const loggedIn = async() => {

    const authToken = localStorage.getItem('authToken');
    if (authToken && authToken !== undefined) {
        return await axios.get(`${api}/users/test`, {
                headers: {
                    authorization: 'Bearer ' + authToken
                }
            })
            .then(res => {
                if (res.data.status === 'success') {
                    if(res.data.user.role!=="admin") return false
                    return res.data.user

                } else {

                    return false
                }
            })
            .catch(err => {
                console.log("err",err)
                return false;
            });
    } else {
        return false
    }
}



export const resetPassword = async(password, params) => {
  
    return await axios.patch(`${api}/users/resetPassword/${params.token}`, password)
        .then(res => {
            if (res.data.status === 'success') {
                return true
                    //changed
            } else {
                return false
                    //invalid token or has expired
            }
        })
        .catch(err => {
            return false;
        });
}