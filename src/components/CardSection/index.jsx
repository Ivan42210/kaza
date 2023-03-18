import announces from "../../datas/announces";
import Card from "../Card";
import '../../styles/Cards.css'

function CardSection(){
    return(
       <section className="card-section bg-secondary">
        <div className="card-container">
        { announces.map(({id, title}) =>(
           
             <Card
                id={id}
                title={title}
               
            />
         
        ))}
        </div>
       </section> 
    )
}

export default CardSection;