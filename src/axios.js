import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://whatsapp-backend0.herokuapp.com/'
})

export default instance