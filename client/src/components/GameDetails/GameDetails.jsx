import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import * as gameService from "../../services/gameService";

export default function GameDetails(){
   
    const { gameId } = useParams()
    const[game,setGame] = useState({})

    useEffect(() =>{
      gameService.getOne(gameId)
      .then(setGame)
    },[gameId])
    //const [title,category,maxLevel,imageUrl,summary] = {...game}
    return (
        <>
         <section id="game-details">
  <h1>Game Details</h1>
  <div className="info-section">
    <div className="game-header">
      <img className="game-img" src={game.imageUrl} alt={game.title} />
      <h1>{game.title}</h1>
      <span className="levels">MaxLevel: {game.maxLevel}</span>
      <p className="type">{game.category}</p>
    </div>
    <p className="text">
    {game.summary}
    </p>
    {/* Bonus ( for Guests and Users ) */}
    {/* <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
        <li className="comment">
          <p>Content: I rate this one quite highly.</p>
        </li>
        <li className="comment">
          <p>Content: The best </p>
        </li>
      </ul>
      <p className="no-comment">No comments.</p>
    </div> */}
    {/* <div className="buttons">
      <a href="#" className="button">
        Edit
      </a>
      <a href="#" className="button">
        Delete
      </a>
    </div> */}
  </div>
  {/* <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form">
      <textarea name="comment" placeholder="Comment......" defaultValue={""} />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article> */}
</section>

        </>
    )
}