import AnnounceHead from "../AnnounceHead";

function Logement({...logement}){
    return(
        <div key={logement.id} className="max-width">
            <div className="logement-carousel">
            <img src={logement.cover} alt="" />
            </div>
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