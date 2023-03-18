import errorPic from '../../assets/404.png';
import '../../styles/Error.css'
import { Link } from 'react-router-dom';

function Error(){
    return(
        <div className="max-width error">
            <section>
            <img src={errorPic} alt="error404" />
            <p className="text-primary text-center">Oups! La page que vous demandez n'existe pas.</p>
            <Link to={'/'} className="text-primary mx-auto">Retourner à la page d'accueil</Link>
            </section>       
        </div>
    )
}

export default Error;