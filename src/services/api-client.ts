import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org',
    params:{
        api_key: 'a57af3dbdd64edf9455c85533047ed0a'
    }
})

