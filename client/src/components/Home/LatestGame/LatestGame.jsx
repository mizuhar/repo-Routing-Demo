import { Link } from "react-router-dom";

export default function LatestGame({
    title,
    imageUrl,
    _id
}){

    return (
        <>
        <div className="game">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      
      <h3>{title}</h3>
     <br />
      <div className="data-buttons">
        <Link to={`/games/${_id}`} className="btn details-btn">
          Details
        </Link>
      </div>
    </div>
        </>
    )
}