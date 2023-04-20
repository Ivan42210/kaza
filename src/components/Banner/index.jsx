function Banner({img, text, alt}){
    return (
        
        <section className='banner position-relative'>
            <img src={img} alt={alt} />
            <div className='banner-text'>
            <h2 className='text-light'>{text}</h2>
        </div>
      
    </section>
     
     
    )
}

export default Banner;