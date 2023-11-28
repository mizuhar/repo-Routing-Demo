import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../contexts/TodoContext';
import Path from '../../paths';
import * as authService from '../../services/authService'

export default function Logout(){
    const {logoutHandler} = useContext(TodoContext)
    const navigate = useNavigate()
    useEffect(()=>{
    authService.logout()
    .then(()=>{  logoutHandler(),
                 navigate(Path.Home)})

    .catch(()=> { logoutHandler(),
                  navigate(Path.Home)})

}),[];
   

    return null;
}