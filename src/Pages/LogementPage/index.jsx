import Logement from "../../components/Logement";
import announces from "../../datas/announces";

function LogementPage(){
   const href = window.location.pathname.split('/')[2];
   const announce = announces.find(announce => announce.id === href);
   return(
    
      <Logement
      key={announce.id}
      {...announce}/>
   )
}

export default LogementPage;