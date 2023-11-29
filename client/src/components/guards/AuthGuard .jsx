
import { useContext } from "react"
import {  Navigate, Outlet } from "react-router-dom"
import { TodoContext } from "../../contexts/TodoContext"

export default function AuthGuard(props){

    const { isAuthenticated } = useContext(TodoContext)
    
    if(!isAuthenticated){
        return <Navigate to='/login'/>
    }
    return <Outlet />;
       
   


}