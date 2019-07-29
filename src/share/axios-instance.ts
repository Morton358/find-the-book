import axios from 'axios'

export const coversApiAxios = axios.create({
  baseURL: process.env.REACT_APP_COVERS_API,
})

export const searchApiAxios = axios.create({
  baseURL: process.env.REACT_APP_SEARCH_API,
})
