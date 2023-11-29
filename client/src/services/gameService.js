import { request } from "../lib/request"

const baseURL = 'http://localhost:3030/data/games'


export const getAll = async ()=>{
  const result =  await request('GET', baseURL)

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
