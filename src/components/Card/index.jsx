import { Link } from "react-router-dom";

function Card({id,title, cover}){
    return (
        <div key={id} className="card bg-primary position-relative">
            <Link className="card-link" to={`/logement/${id}`}>
            <img src={cover} alt={title} />
           <div className="card-styling">
            <h3 className="text-light card-text">{title}</h3>
            </div> 
            </Link>
        </div>
    )
}

export default Card;