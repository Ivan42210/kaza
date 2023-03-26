import Host from "../Host";
import Tags from "../Tags";
import Rating from "../Rating";
import '../../styles/Announce.css'

function AnnounceHead({id, title, host, location, tags, rating}){
    return(
        <div key={id} className="announce-top">
            <div className="w-50">
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
                    <Rating
                    rating={rating}
                    />
                </div>
            </div>
        </div>
    )
}

export default AnnounceHead;