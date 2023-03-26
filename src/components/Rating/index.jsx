import starEmpty from '../../assets/star.svg';
import starFull from '../../assets/starfull.svg';

function Rating({rating}){



    let fullStars = Array.from({ length: rating }, (index) => index);
    let emptyStars = Array.from({ length: 5 - rating }, (index) => index);
    
    return (
        <div className="rate">
        {
            fullStars.map((index) => {
                return (<img key={index} alt="star" className="star" src={starFull}></img>)
            })
        }
        {
            emptyStars.map((index) => {
                return (<img key={index} alt="star" className="star" src={starEmpty}></img>)
            })
        }
        </div>
    )
}

export default Rating;
