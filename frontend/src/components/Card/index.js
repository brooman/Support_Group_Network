import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const Card = props => {
  const {image, title, content, link_url, link_text} = props

  return (
    <div className="card">
      <Image src={image} size="3x4"/>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      {link_url && <a className="link" href={link_url}>{link_text}</a>}
    </div>
  );
};

export default Card;