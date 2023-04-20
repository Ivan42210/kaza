import { Navigate } from "react-router-dom";
import Logement from "../../components/Logement";
import announces from "../../datas/announces";

function LogementPage(){
   const href = window.location.pathname.split('/')[2];
   const announce = announces.find(announce => announce.id === href);

   if(!announce){
      return <Navigate to={'*'}/>
   }

   return(
      <div className="page-normalization">
      <Logement
      key={announce.id}
      {...announce}/>
      </div>
   )
}

export default LogementPage;