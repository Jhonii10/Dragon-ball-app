import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({name,description,type,id}) => {
    
    const path = `/assets/${type}-${id}.png`
    
    return (
        <div className='card m-3 col-12 col-md-4 card-10 ' style={{width:200}}>
          <h2>{name}</h2>
          <img src={path} alt={description} />
          <h3>{description}</h3>
          <p>
            <Link className='card-link' to={`/character/${id}`}>Ver mas</Link>
          </p>
            
        </div>
    );
}

export default Card;
