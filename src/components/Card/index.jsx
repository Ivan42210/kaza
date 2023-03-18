function Card({id,title}){
    return (
        <div key={id} className="card bg-primary position-relative">
           <div className="card-styling">
            <h3 className="text-light card-text">{title}</h3>
            </div> 
        </div>
    )
}

export default Card;