import axio from "axios";

export const api = axio.create({
    baseURL: 'https://rocketnotes-api-cd9p.onrender.com'
});