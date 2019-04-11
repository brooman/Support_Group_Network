import React from 'react';
import PropTypes from 'prop-types';

const TextBox = props => {
  const {title, content, color, isWide, isLarge, link} = props

  return (
    <div className={`textbox ${color} ${isWide ? 'wide' : ''} ${isLarge ? 'large' : ''}`}>
      <h3 className="title"><span>{title}</span></h3>
      <p className="text">{content}</p>
      {link && <a className="link" href={link.url}>{link.text}</a>}
    </div>
  );
};

TextBox.propTypes = {
  
};

export default TextBox;