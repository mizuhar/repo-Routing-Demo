import { request } from "../lib/request"

const baseURL = 'http://localhost:3030/users'

export  const login = async (email, password) => {

const result = await request('POST',baseURL + '/login',{
    email,
    password,

   })

return result;

}
export  const register = async (email, password) => {

const result = await request('POST',baseURL + '/register',{
    email,
    password,

   })

return result;

}