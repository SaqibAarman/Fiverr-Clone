import React from 'react';
import { Link } from 'react-router-dom';
import './CatCard.scss';

const CatCard = ({ item }) => {
  return (
    <Link to={`/gig/cat=designer`}>
      <div className='catCard'>
        <img src={item.img} alt="Card-Image" />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
      </div>
    </Link>
  )
}

export default CatCard