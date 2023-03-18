import BannerOne from '../../assets/bannerHome.png'


function BannerHome(){
    return (
        <section className='banner position-relative'>
        <img src={BannerOne} alt="" />
        <div className='banner-text'>
        <h2 className='text-light'>Chez vous, partout et ailleurs</h2>
        </div>
    </section>
    )
}

export default BannerHome;