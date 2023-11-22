import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";

export default function GameDetails(){
    
    const [comment,setComment] = useState([])
    const { gameId } = useParams()
    const[game,setGame] = useState({})

    useEffect(() =>{
      gameService.getOne(gameId)
      .then(setGame)
      commentService.getAll(gameId)
      .then(setComment)
    },[gameId]) 

    const addCommentHandler = async (e) =>{
        e.preventDefault()
       
        const formData = new FormData(e.currentTarget)
         const newComment =   await commentService.createComment(gameId,
             formData.get('username'),
             formData.get('comment'));
             setComment(state => [...state, newComment]);
             resetFormValues()
    }
   
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
    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
            {comment.map(({_id,username,text,})=>
            (<li key={_id} className="comment" ><p>{username}: {text}</p></li>))} 
      </ul>
      {comment.length === 0 && (<p className="no-comment">No comments.</p>)}
      
    </div>
    {/* <div className="buttons">
      <a href="#" className="button">
        Edit
      </a>
      <a href="#" className="button">
        Delete
      </a>
    </div> */}
  </div>
  <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form" onSubmit={addCommentHandler}>
        <input type="text"  name="username" placeholder="username"/>
      <textarea name="comment" placeholder="Comment......" defaultValue={""} />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article>
</section>

        </>
    )
}