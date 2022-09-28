import axios from "axios"

export default (accessToken: string) => axios.defaults.headers.common['Authorization'] = accessToken
