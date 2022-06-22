import axios from 'axios'

export const http = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes"
})

