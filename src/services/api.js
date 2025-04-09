import axios from "axios";

// URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=2e8875a5be99cb8968af974e39ed9514&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;