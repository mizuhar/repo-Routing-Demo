import { request } from "../lib/request"
const baseURL = 'http://localhost:3030/jsonstore/comments'

export const getAll = async (gameId) => {
   return Object.values(await request('GET', baseURL)).filter(comment=>comment.gameId === gameId)
}

export const createComment = async (gameId, username, text) => {
     const newComment = await request('POST', baseURL, {
        gameId,
        username,
        text

     })
     return newComment
}