function Host({...host}){
    
    const name = host.name.split(' ');
    

    return(
        <div key={host.name} className='host'>
            <div className="host-introducing">
            <h4 className="text-primary">{name[0]}</h4>
            <h4 className="text-primary">{name[1]}</h4>
            </div>
            <div className="host-thumbnail">
                <img src={host.picture} alt={host.name} />
            </div>
        </div>
    )
}

export default Host;