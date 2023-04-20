import Banner from "../../components/Banner";
import bannerAbout from '../../assets/bannerAbout.png';
import { aboutText } from "../../datas/about";
import Collapse from "../../components/Collapse";
import '../../styles/About.css'







function About(){
    const alt = 'Kaza about banner'
    return(
       <div className="max-width page-normalization">
            < Banner img={bannerAbout} alt={alt}/>
            <main className="about-body d-flex flex-col mx-auto">
                { aboutText.map(({titre, texte}) => (
            
                <Collapse key={titre} title={titre} text={texte} type={'text'}/>
                ))}
            </main>
       </div>
    )
}

export default About;