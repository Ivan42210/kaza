function Host({...host}){
    console.log(host)
    return(
        <div key={host.name} className='host'>
            <h4 className="text-primary">{host.name}</h4>
            <div className="host-thumbnail">
                <img src={host.picture} alt={host.name} />
            </div>
        </div>
    )
}

export default Host;