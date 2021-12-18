import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjE5NDljOGE3MmFiNjJhODMyM2RhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTg5NDYyNSwiZXhwIjoxNjQwMTUzODI1fQ.EOmvP21xXk5DiCqA2Zvjjl7fjK-vlItNtDLUi3hvGb8";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});