import { useState } from "react";
import { useEffect } from "react"
import { Link,useNavigate, useParams } from "react-router-dom"
import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { useReducer } from "react";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import { useMemo } from "react";
import { Button } from "react-bootstrap";



export default function GameDetails(){
    const navigate = useNavigate()
    const { email, userId } = useContext(TodoContext) 
    const[game,setGame] = useState({})
    
    //const [comment,setComment] = useState([])
    const [comment, dispath] =  useReducer(reducer, [])
    const { gameId } = useParams()
   
    

    useEffect(() =>{
      gameService.getOne(gameId)
      .then(setGame)
      commentService.getAll(gameId)
      .then(result=>{
        dispath({
          type: 'GET_ALL_COMMENTS',
          payload: result,

        })
      })
    },[gameId]) 

    const addCommentHandler = async (values) =>{
       
         const newComment =   await commentService.createComment(
             gameId,
             values.comment,
            
             );
           newComment.owner = { email }
             //setComment(state => [...state, {...newComment, owner:  {email}  }]);
             dispath({
              type: 'ADD_COMMENTS',
              payload: newComment,
             })
    }
const deleteButtonClickHandler = async () =>{
 const hasConfirmed = confirm('Are you sure you want to delete this game?');

 if(hasConfirmed){
   await gameService.remove(gameId)

   navigate('/games')
 }
}

    const initialValue =  useMemo(() => ({
      comment: '',
    }),[])

    const {values, onChange, onSubmit} = useForm(addCommentHandler,initialValue);

    

    return (
        <>
         <section id="game-details">
  <h1>Boxer Details</h1>
  <div className="info-section">
    <div className="game-header">
      <img className="game-img" src={game.imageUrl} alt={game.title} />
      <h1>{game.title}</h1>
      <span className="levels">Number of world titles: {game.maxLevel}</span>
      <p className="type">{game.category}</p>
    </div>
    <p className="text">
    {game.summary}
    </p>
    {/* Bonus ( for Guests and Users ) */}
    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
            {comment.map(({_id, text, owner:  { email } })=>
            (<li key={_id} className="comment" ><p>{email}: {text}</p></li>))} 
      </ul>
      {comment.length === 0 && (<p className="no-comment">No comments.</p>)}
      
    </div>
    {userId === game._ownerId && (<div className="buttons">
      <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
      <Button className="button" onClick={deleteButtonClickHandler}>Delete</Button>
    </div>
  )}
    </div>
  <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form" onSubmit={onSubmit}>
      <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"  />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article>
</section>

        </>
    )
}