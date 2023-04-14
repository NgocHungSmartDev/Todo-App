import { Link } from 'react-router-dom';
import './card.css';

function Card(props) {
  return(
     <div className="card">
          <img className='card__img' src={props.path} alt="John" />
          <h1>{props.name}</h1>
          <p className="title">{props.price}</p>
          <p><Link to={`/Product/${props.id}`} className='link'>Detail</Link></p>
     </div>
  )
}

export default Card;