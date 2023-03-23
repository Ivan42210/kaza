import { useState } from "react"
import '../../styles/Collapse.css'

function Collapse({title, text, type, list}){

    

    const [isOpen, setOpen ] = useState(false)


    return (
        <div className="collapse bg-secondary">
            <section onClick={()=> setOpen(!isOpen)}
            className="collapse-btn bg-primary text-light">
            {title}
            </section>
            { isOpen && ( (type ==="equipments") ? (
                <div className="collapse-body">
                    <ul>
                        {list.map((item, index) =>(
                            <li key={index} className="collapse-item">{item}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="collapse-body bg-secondary">
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}

export default Collapse;