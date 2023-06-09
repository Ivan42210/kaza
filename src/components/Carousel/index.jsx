import { useState } from "react";
import '../../styles/Carousel.css';
import Button from "../Buttons";
import Slide from "../Slide";

function Carousel({images, title}){

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    function handleNextClick(){
        if(currentSlideIndex >= images.length -1){
            setCurrentSlideIndex(0);
            return
        }

        setCurrentSlideIndex(currentSlideIndex +1);
    }

    function handlePreviousClick(){
        if(currentSlideIndex <= 0){
            setCurrentSlideIndex(images.length -1);

            return
        }

        setCurrentSlideIndex(currentSlideIndex -1);
    }

    return(
        <section className="carousel bg-primary" aria-label="logement" aria-roledescription="carousel" aria-atomic="false" aria-live="polite">
            {images.length > 1 && <Button className="button" dataAction="previous-slide" ariaLabel="previous" onClick={handlePreviousClick}/>}
            {images.map((image, index) => {
                let slideNumber = `Image ${index +1} of ${images.length}`;
                const isVisible = index === currentSlideIndex ? true : false;

                return <Slide key={index} alt={title} src={image} isVisible={isVisible} ariaLabel={slideNumber} index={index} length={images.length}></Slide>
            })
            }
            {images.length > 1 && <Button className="button" dataAction="next-slide" ariaLabel="next" onClick={handleNextClick}/>}
        </section>
    )

}

export default Carousel