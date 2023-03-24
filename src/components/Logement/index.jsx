import AnnounceHead from "../AnnounceHead";
import Carousel from "../Carousel";
import Collapse from "../Collapse";
import '../../styles/Logement.css'

function Logement({...logement}){
    
    return(
        <div key={logement.id} className="max-width">
            <Carousel images={logement.pictures} title={logement.title}/>
            <AnnounceHead 
            id={logement.id}
            title={logement.title}
            host={logement.host}
            location={logement.location}
            tags={logement.tags}
            />
            <section className="logement-body">
                <div className="logement-part">
                <Collapse 
                title={"Description"}
                text={logement.description}
                type={"description"}/>
                </div>
                <div className="logement-part d-flex justify-end">
                <div>
                <Collapse 
                title={"Equipements"}
                list={logement.equipments}
                type={"equipments"}/>
                </div>
                </div>

            </section>
        </div>
        
    )
}

export default Logement;