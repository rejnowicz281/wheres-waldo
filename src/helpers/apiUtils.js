import axios from "axios";

const API_URL = "http//localhost:3000/";

const api = axios.create({
    baseURL: API_URL,
});

async function getMapsData() {
    try {
        const response = await api.get(`/maps`);
        return response;
    } catch (error) {
        return error.response;
    }
}

async function sendScore(map_id, score) {
    try {
        const response = await api.post(`/maps/${map_id}/scores`, score);
        return response;
    } catch (error) {
        return error.response;
    }
}

async function getScoresData(map_id) {
    try {
        const response = await api.get(`/maps/${map_id}/scores`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export { getMapsData, getScoresData, sendScore };
