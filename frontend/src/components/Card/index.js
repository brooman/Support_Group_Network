import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const Card = props => {
  const {image, title, content, linkUrl, linkText} = props

  return (
    <div className="card">
      <Image image={image} size="3x4"/>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      {linkUrl && <a className="link" href={linkUrl}>{linkText}</a>}
    </div>
  );
};

export default Card;