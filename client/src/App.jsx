import { useState } from "react"
import { Routes,Route, useNavigate } from "react-router-dom"

import Path from './paths'
import * as authService from "./services/authService"
import { TodoContext } from "./contexts/TodoContext"

import CreateGame from "./components/CreateGame/CreateGame"
import GameDetails from "./components/GameDetails/GameDetails"
import GameList from "./components/GameList/GameList"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Logout from "./components/Logout/Logout"



function App() {
  const navigate = useNavigate()
  const [auth,setAuth] = useState(()=>{
    localStorage.removeItem('accessToken')
    return {}
  })

  const loginSubmitHandler = async (values) => {

    const result = await authService.login(values.email, values.password)

    setAuth(result)

    localStorage.setItem('accessToken',result.accessToken)

    navigate(Path.Home)

  };
  const registerSubmitHandler = async (values) => {

   const result = await authService.register(values.email, values.password)

    setAuth(result)

    localStorage.setItem('accessToken',result.accessToken)

    navigate(Path.Home)

  };
  const logoutHandler = ()=>{
    setAuth({})

    localStorage.removeItem('accessToken')

    navigate(Path.Home)
  }
  const values = { 
                   loginSubmitHandler,
                   registerSubmitHandler,
                   logoutHandler,
                   username: auth.username || auth.email,
                   email: auth.email,
                   isAuthenticated: !!auth.accessToken,
                  }
  return (
    <TodoContext.Provider value={values}>
    <div id="box">

   <Header></Header>

      <Routes>
        <Route path={Path.Home} element={<Home/>}></Route>
        <Route path="/games" element={<GameList/>}></Route>
        <Route path="/games/create" element={<CreateGame/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/games/:gameId" element={<GameDetails/>}></Route>
        <Route path={Path.Logout} element={<Logout />}></Route>
      </Routes>
   


      
    </div>
    </TodoContext.Provider>
  )
}

export default App
