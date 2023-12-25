import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token};`
}

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = "";
// }

export async function registration(credentials) {
    const response = await axios.post("users/signup", credentials);
    setAuthHeader(response.data.token);
    return response; 
}

