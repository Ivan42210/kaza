import aboutPic from '../../assets/bannerAbout.png'

function BannerAbout(){
    return(
        <section className='banner position-relative'>
            <img src={aboutPic} alt="kasa home banner" />
            
        </section>
    )
}

export default BannerAbout;