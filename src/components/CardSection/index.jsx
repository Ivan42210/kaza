import announces from "../../datas/announces";
import Card from "../Card";
import '../../styles/Cards.css'

function CardSection(){
    return(
       <section className="card-section bg-secondary">
        <div className="card-container">
        { announces.map(({id, title, cover}) =>(
           
             <Card
                id={id}
                title={title}
                cover={cover}
               
            />
         
        ))}
        </div>
       </section> 
    )
}

export default CardSection;