import axios from "axios";

export default axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w500/'
})

