import axios from "axios"

const instance = axios.create({
    baseURL : "https://tiktok6622.herokuapp.com/"
})

export default instance