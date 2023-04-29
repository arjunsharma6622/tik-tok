import axios from "axios"

const instance = axios.create({
    // baseURL : "https://tiktok6622.herokuapp.com/"
    baseURL : "https://localhost:8000/"
})

export default instance