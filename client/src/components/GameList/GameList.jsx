import * as gameService  from "../../services/gameService";
import { useEffect,useState } from "react";
import GameListItem from "./GameListItem/GameListItem";
export default function GameList(){
  const [games,setGames] = useState([])
  useEffect(() => {
  gameService.getAll()
      .then(result => setGames(result))
 }, []);

    return (
        <>
        <section id="catalog-page">
  <h1>All Games</h1>
   {games.map(x=>(<GameListItem key={x._id} {...x}/>))}

{games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
  
</section>

        </>
    )
}