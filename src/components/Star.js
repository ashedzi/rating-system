import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Star(props) {
    return (
        <div 
        className='star' 
        onClick={props.onClick} 
        style={{color: props.filled? '#ffc107' : '#777'}}>
            <FontAwesomeIcon icon={faStar} />
        </div>
    );
}

export default Star;

