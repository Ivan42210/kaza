import Banner from '../../components/Banner';
import CardSection from '../../components/CardSection';
import BannerPic from '../../assets/bannerHome.png'

function Home() {
  const alt = 'Kaza Homepage picture';
  const textBanner = 'Chez vous, partout et ailleurs'
  return (
    <div className="App max-width">
      < Banner 
      img={BannerPic}
      alt={alt}
      text={textBanner}/>
      <CardSection />
    </div>
  );
}

export default Home;
