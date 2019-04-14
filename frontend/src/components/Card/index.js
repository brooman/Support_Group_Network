import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const Card = props => {
  const {image, title, content} = props

  return (
    <div className="card">
      <Image src={image} size="3x4"/>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      <a className="link" href="">Learn more...</a>
    </div>
  );
};

export default Card;