import { Routes,Route } from "react-router-dom"
import CreateGame from "./components/CreateGame/CreateGame"
import GameDetails from "./components/GameDetails/GameDetails"
import GameList from "./components/GameList/GameList"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { TodoContext } from "./contexts/TodoContext"


function App() {

  return (
    <TodoContext.Provider value={' Profesional'}>
    <div id="box">

   <Header></Header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/games" element={<GameList/>}></Route>
        <Route path="/games/create" element={<CreateGame/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/games/:gameId" element={<GameDetails/>}></Route>
      </Routes>
   


      
    </div>
    </TodoContext.Provider>
  )
}

export default App
