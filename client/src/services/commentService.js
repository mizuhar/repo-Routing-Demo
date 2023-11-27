import {request} from "../lib/request"
const baseURL = 'http://localhost:3030/data/comments'

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
   where: `gameId="${gameId}"`,
   load: `owner="_ownerId:users`
})
   const result = await request('GET', `${baseURL}?${query}`)

   return result
}

export const createComment = async (gameId, text) => {
     const newComment = await request('POST', baseURL, {
        gameId,
        text,

     })
     return newComment
}