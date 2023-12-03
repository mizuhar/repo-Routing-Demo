import { useSearchParams } from "react-router-dom"
import { request } from "../lib/request"

const baseURL = 'http://localhost:3030/data/games'


export const getAll = async ()=>{
  const result =  await request('GET', baseURL)

    return result
}
export const getLatest = async ()=>{
  const query = new URLSearchParams({
    //sortBy: `_createdOn desc`,
    //count: 3
    offset: 0,
    //pageSize: 1,
})
  const result = await request('GET', `${baseURL}?${query}`)

   return result
}
export const getOne = async (gameId)=>{
  const result =  await request('GET', `${baseURL}/${gameId}`)

    return result
}
export const create = async (gameData) =>{
    const result = await request('POST', baseURL, gameData)
     
    return result
}
export const edit = async (gameId, gameData) =>{
    const result = await request('PUT', `${baseURL}/${gameId}`, gameData)
     
    return result
}
export const remove = async (gameId) =>{
    const result = await request('DELETE', `${baseURL}/${gameId}`)
     
    return result
}
