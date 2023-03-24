import Banner from "../../components/Banner";
import bannerAbout from '../../assets/bannerAbout.png';
import Collapse from "../../components/Collapse";
import '../../styles/About.css'

const textLiability = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
const textRespect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
const textService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const textSecurity = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

function About(){
    const alt = 'Kaza about banner'
    return(
       <div className="max-width page-normalization">
        < Banner
        img={bannerAbout}
        alt={alt}/>
        <main className="about-body mx-auto">
        <Collapse
        title={'Fiabilité'}
        text={textLiability}
        type={'text'}
        />
         <Collapse
        title={'Respect'}
        text={textRespect}
        type={'text'}
        />
         <Collapse
        title={'Service'}
        text={textService}
        type={'text'}
        />
         <Collapse
        title={'Sécurité'}
        text={textSecurity}
        type={'text'}
        />

        </main>
       </div>
    )
}

export default About;