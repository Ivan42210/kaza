import announces from "../../datas/announces";
import Card from "../Card";
import '../../styles/Cards.css'

function CardSection(){
    return(
       <section className="card-section">
        <div className="card-container">
        { announces.map(({id, title, cover}) =>(
           
             <Card

             key={id}
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