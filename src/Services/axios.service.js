import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    const response = await axios.get(`${baseURL}/users`);
    return response;
}

export const addUser = async (payload) => {
    const response = await axios.post(`${baseURL}/users`, payload);
    return response;
}

export const updateUser = async (userId, payload) => {
    const response = await axios.put(`${baseURL}/users/${userId}`, payload);
    return response;
}

export const deleteUser = async (userId) => {
    const response = await axios.delete(`${baseURL}/users/${userId}`);
    return response;
}