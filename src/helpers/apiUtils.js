import axios from "axios";

const API_URL = "http//localhost:3000/";

const api = axios.create({
    baseURL: API_URL,
});

export async function getMaps() {
    try {
        const response = await api.get(`/maps`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function sendScore(map_id, score) {
    try {
        const response = await api.post(`/maps/${map_id}/scores`, score);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getScores(map_id) {
    try {
        const response = await api.get(`/maps/${map_id}/scores`);
        return response;
    } catch (error) {
        return error.response;
    }
}
