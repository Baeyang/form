import axios from "axios"

const URL = 'https://658728b48ff2e26ee4e07935.mockapi.io/User'
export const addUser = async (user) => {
    try {
        const res = await axios.post(URL, user);
        const result = await res.data
        return result;
    }
    catch(error) {
        throw new Error(error)
    }
}

export const updateStep = async (id, step) => {
    try {
        const res = await axios.put(URL +`/${id}`, step);
        const result = await res.data
        return result;
    }
    catch(error) {
        throw new Error(error)
    }
}