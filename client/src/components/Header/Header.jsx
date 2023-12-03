import { useContext } from "react"
import { Link } from "react-router-dom"
import  {TodoContext}  from "../../contexts/TodoContext"

export default function Header(){
  const {isAuthenticated, username} = useContext(TodoContext)
    return (
        <>
<header>
  {/* Navigation */}
  <h1>
    <Link className="home" to={"/"}>
      G.O.A.T
    </Link>
  </h1>
  <nav >
    <Link to={"/games"}>List of the greatest </Link>
    {isAuthenticated && (<div id="user" >
      <Link to={"/games/create"}>Your suggestion</Link>
      <Link to={"/logout"}>Logout</Link>
      <span>| {username}</span>
    </div>)}
    
    {!isAuthenticated && (<div id="guest">
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>)}
    
  </nav>
</header>


        </>
    )
}