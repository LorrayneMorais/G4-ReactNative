import axios from "axios";
export const api = axios.create({
    baseURL: "http://localhost:3000/"
})

export const registerUser = async ({ name, email, password }) => {
    const response = await api.post('/users', { name, email, password });
    return response;
}
export const loginUser = async ({ email, password }) => {
    const response = await api.get('/users', { params: { email, password } });
    return response;
}