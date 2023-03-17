import aboutPic from '../../assets/bannerAbout.png'

function BannerAbout(){
    return(
        <section className='banner position-relative'>
            <img src={aboutPic} alt="" />
        </section>
    )
}

export default BannerAbout;