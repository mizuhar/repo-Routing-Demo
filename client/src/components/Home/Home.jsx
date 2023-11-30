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
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
  </div>
  <img src="./images/four_slider_img01.png" alt="hero" />
  <div id="home-page">
    <h1>Latest Games</h1>
    {latestGames.map(game => <LatestGame {...game}></LatestGame>)}
    {/* Display div: with information about every game (if any) */}

    
    
    {!latestGames.length === 0 && ( <p className="no-articles">No games yet</p>)}
   
  </div>
</section>

        </>
    )
}