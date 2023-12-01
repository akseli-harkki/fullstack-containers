import axios from 'axios'
import 'dotenv/config'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
})

export default apiClient