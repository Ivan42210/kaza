import starEmpty from '../../assets/star.svg';
import starFull from '../../assets/starfull.svg';
import '../../styles/Rating.css'

function Rating({rating}){



    let fullStars = Array.from({ length: rating }, (value, index) => index);
    let emptyStars = Array.from({ length: 5 - rating }, (value, index) => index);

    console.log(fullStars)

    
    return (
        <div className="rate">
        {
            fullStars.map((star, index) => {
                console.log(index)
               return (
               <img key={index} alt="star" className="star" src={starFull}></img>
               )
            })
        }
        {
            emptyStars.map((star, index) => {
                return (<img key={index} alt="star" className="star" src={starEmpty}></img>)
            })
        }
        </div>
    )
}

export default Rating;
