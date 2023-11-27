import { useState } from "react";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export default function GameDetails(){
    const {email, userId} = useContext(TodoContext) 
    const[game,setGame] = useState({})
    const [comment,setComment] = useState([])
    const { gameId } = useParams()
    
    

    useEffect(() =>{
      gameService.getOne(gameId)
      .then(setGame)
      commentService.getAll(gameId)
      .then(setComment)
    },[gameId]) 

    const addCommentHandler = async (e) =>{
        e.preventDefault()
       
        const formData = new FormData(e.currentTarget)
         const newComment =   await commentService.createComment(
             gameId,
             formData.get('comment'),
            
           
             );

             setComment(state => [...state, {...newComment, email }]);
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
            {comment.map(({_id, text, email})=>
            (<li key={_id} className="comment" ><p>{email}: {text}</p></li>))} 
      </ul>
      {comment.length === 0 && (<p className="no-comment">No comments.</p>)}
      
    </div>
    {userId === game._ownerId && (<div className="buttons">
      <a href="#" className="button">
        Edit
      </a>
      <a href="#" className="button">
        Delete
      </a>
    </div>
  )}
    </div>
  <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form" onSubmit={addCommentHandler}>
      <textarea name="comment" placeholder="Comment......" defaultValue={""} />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article>
</section>

        </>
    )
}