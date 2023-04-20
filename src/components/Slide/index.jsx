
function Slide({src, alt,ariaLabel, isVisible, index, length}){
    let visibility;
    isVisible ? visibility = "show" : visibility = "hide";
    return(
        <>
        <img src={src} alt={alt} className='slide' data-slide={visibility} aria-roledescription="slide" aria-label={ariaLabel}/>
        <div className={`slide-count-${visibility} counter-place`}>
            <p>{index+1}/{length}</p>
        </div>
        </>
    )

}

export default Slide