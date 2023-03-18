import Host from "../Host";
import '../../styles/Announce.css'

function AnnounceHead({id, title, host, location}){
    return(
        <div key={id} className="announce-top">
            <div>
                <h3 className="text-primary">{title}</h3>
                <h4 className="text-primary">{location}</h4>
            </div>
            <div>
                <div>
                    <Host
                        {...host}
                    />
                </div>
            </div>
        </div>
    )
}

export default AnnounceHead;