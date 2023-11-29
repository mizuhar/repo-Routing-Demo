import { Routes, Route } from "react-router-dom";

import Path from "./paths";
import { AuthProvider } from "./contexts/TodoContext";

import CreateGame from "./components/CreateGame/CreateGame";
import GameDetails from "./components/GameDetails/GameDetails";
import GameList from "./components/GameList/GameList";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import GameEdit from "./components/GameEdit/GameEdit";
import AuthGuard from "./components/guards/BaseAuthGuard";


function App() {
  return (
    
      <AuthProvider>
        <div id="box">
          <Header></Header>

          <Routes>
            <Route path={Path.Home} element={<Home />}></Route>
            <Route path="/games" element={<GameList />}></Route>
            
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/games/:gameId" element={<GameDetails />}></Route>
           

            <Route element={<AuthGuard />}>
                <Route path="/games/create" element={<CreateGame/>}></Route>
                <Route path={Path.GameEdit} element={<GameEdit />}></Route>
                <Route path={Path.Logout} element={<Logout />}></Route>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    
  );
}

export default App;
