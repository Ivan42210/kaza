import AnnounceHead from "../AnnounceHead";
import Carousel from "../Carousel";

function Logement({...logement}){
    return(
        <div key={logement.id} className="max-width">
            <Carousel images={logement.pictures} title={logement.title}/>
            <AnnounceHead 
            id={logement.id}
            title={logement.title}
            host={logement.host}
            location={logement.location}
            />
        </div>
    )
}

export default Logement;