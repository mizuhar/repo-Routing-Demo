import * as gameService from "../../services/gameService";
import {useNavigate} from 'react-router-dom'



export default function CreateGame(){
     const navigate = useNavigate()

     const createGameSubmitHandler = async (e)=>{
     e.preventDefault()
     const gameData = Object.fromEntries(new FormData(e.currentTarget))
     try {
      await gameService.create(gameData)
      navigate('/games')
     } catch (error) {
      console.log(error);
     } 
  }

    return(
        <>
        <section id="create-page" className="auth">
  <form id="create" onSubmit={createGameSubmitHandler}>
    <div className="container">
      <h1>Your vote</h1>
      <label htmlFor="leg-title">Name of the boxer:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter game title..."
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter game category..."
      />
      <label htmlFor="levels">Number of world title:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min={1}
        placeholder={1}
      />
      <label htmlFor="game-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />
      <label htmlFor="summary">Summary:</label>
      <textarea name="summary" id="summary" defaultValue={""} />
      <input  className="btn submit" type="submit" defaultValue="Create Game" />
    </div>
  </form>
</section>

        </>
    )
}