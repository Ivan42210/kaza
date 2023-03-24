import Host from "../Host";
import Tags from "../Tags";
import '../../styles/Announce.css'

function AnnounceHead({id, title, host, location, tags}){
    return(
        <div key={id} className="announce-top">
            <div>
                <h3 className="text-primary announce-title">{title}</h3>
                <h4 className="text-primary announce-location">{location}</h4>
                <Tags 
                tags={tags}/>
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