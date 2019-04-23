import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const Card = props => {
  const {image, title, content, link} = props

  return (
    <div className="card">
      <Image src={image} size="3x4"/>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      {link && <a className="link" href={link.url}>{link.text}</a>}
    </div>
  );
};

export default Card;