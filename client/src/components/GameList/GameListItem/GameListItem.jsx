import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";

export default function GameListItem({
    _id,
    title,
    category,
    imageUrl,
}){
  const name = useContext(TodoContext)
    return(
        <>
         <div className="allGames">
    <div className="allGames-info">
      <img src={imageUrl} />
      <h6>{category}</h6>
      <h2>{title}:{name}</h2>
      <Link to={`/games/${_id}`} className="details-button">
        Details
      </Link>
    </div>
  </div>
        </>
    )
}