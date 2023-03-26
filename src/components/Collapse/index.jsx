import { useState } from "react"

import '../../styles/Collapse.css'
import arrow from '../../assets/arrow.png'

function Collapse({title, text, type, list}){

  

    const [isOpen, setOpen ] = useState(false);
    
   
   

    return (
        <div className="collapse w-100 bg-secondary position-relative">
            <section onClick={()=> setOpen(!isOpen)}
            className="collapse-btn w-100 bg-primary text-light d-flex justify-space-b"
            >
            {title}
            <img src={arrow} alt="arrow down-left" className={`collapse-arrow-${isOpen}`}/>
            </section>
            { type ==="equipments" ? (
                <div className="collapse-body" aria-expanded={isOpen}>
                    <ul>
                        {list.map((item, index) =>(
                            <li key={index} className="collapse-item text-primary">{item}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="collapse-body bg-secondary" aria-expanded={isOpen}>
                    <p className="text-primary collapse-text">{text}</p>
                </div>
            )}
       
        </div>
    )
}

export default Collapse;