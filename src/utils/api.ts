import axios from "axios";

const $host = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}key=${process.env.REACT_APP_API_KEY}`
})

export default $host;