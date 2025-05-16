import Star from './Star';
import { useState } from 'react';



function StarRating(props) {
    const[count, setCount] = useState(0);

    // i used this line to create an array with 5 elements, all set to 0:
    const stars = Array(5).fill(0);
    const ratingText = [ 'Click on a star to rate', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']
    
    return (
        <div>
            <div className='star-list flex gap-16'>
                {/* // I mapped over the stars array to render 5 clickable Star components
                // Each star is filled if its index is less than the current rating (count), 
                // and clicking a star updates the rating. */}
                {stars.map((_, index) => (
                    <Star key={index} filled={ index < count } onClick={() => setCount (index + 1)}/>
                ))}
            </div>
            <h2>{ratingText[count]}</h2>
        </div>
    )
}

export default StarRating;