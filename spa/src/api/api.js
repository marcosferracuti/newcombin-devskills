const axios = require('axios');

const AUTH_ENDPOINT = 'http://localhost:8081/auth';
const MEMBERS_ENDPOINT = 'http://localhost:8081/api/members';

const setToken = (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export const login = async (params) => {
    try {
        const response = await axios.post(AUTH_ENDPOINT, params);
        setToken(response.data.token)
        return {success: true, data: response.data};
    }
    catch (error) {
        return {
            success: false, error: error
        };
    }
}

export const createMember = async (params) => {
    try {
        const response = await axios.post(MEMBERS_ENDPOINT, params);
        return {success: true, data: response.data};
    }
    catch (error) {
        return {
            success: false, error: error
        };
    }
}

export const getMembers = async () => {
    try {
        const response = await axios.get(MEMBERS_ENDPOINT);
        return {success: true, data: response.data};
    }
    catch (error) {
        return {
            success: false, error: error
        };
    }
}
