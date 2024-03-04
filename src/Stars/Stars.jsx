

import React from 'react';
import style from './Stars.module.css'; 

const Stars = ({ rating }) => {
  const renderStars = () => {
    let starElements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starElements.push(<span key={i} className={`fa fa-star ${style.active}`}></span>);
      } else {
        starElements.push(<span key={i} className="fa fa-star"></span>);
      }
    }
    return starElements;
  };

  return <div>{renderStars()}</div>;
};

export default Stars;