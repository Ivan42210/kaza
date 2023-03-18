function Logement({...logement}){
    return(
        <div key={logement.id}>
            <h2>{logement.title}</h2>
        </div>
    )
}

export default Logement;