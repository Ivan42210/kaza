import Banner from "../../components/Banner";
import bannerAbout from '../../assets/bannerAbout.png'

function About(){
    const alt = 'Kaza about banner'
    return(
       <div className="max-width">
        < Banner
        img={bannerAbout}
        alt={alt}/>
       </div>
    )
}

export default About;