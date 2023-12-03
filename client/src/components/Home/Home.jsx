import LatestGame from "./LatestGame/LatestGame"
import * as gameService from '../../services/gameService'
import { useEffect } from "react"
import { useState } from "react"


export default function Home (){
  const [ latestGames, setLatestGames ] = useState([])
  useEffect(()=>{
     gameService.getLatest()
     .then(result => setLatestGames(result))
     
  }, [])

  //console.log(latestGames);
    return(
        <>
         <section id="welcome-world">
  <div className="welcome-message">
    <h2>The greatest heavyweight</h2>
    <h3>boxers of all time</h3>
    <h3 style={{fontSize: '20px'}}> vote in our site!</h3>
  </div>
  <img style={{marginTop:'-10em'}} src="https://i.ytimg.com/vi/SHY-s6LrgvA/maxresdefault.jpg" alt="all-time" />
  <div id="home-page">
    <h1>Latest Suggestions</h1>
    {latestGames.map(game => <LatestGame {...game}></LatestGame>)}
    {/* Display div: with information about every game (if any) */}

    
    
    {!latestGames.length === 0 && ( <p className="no-articles">No games yet</p>)}
   
  </div>
</section>

        </>
    )
}