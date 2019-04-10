import React from 'react';
import PropTypes from 'prop-types';

const TextBox = props => {
  const {title, content, color} = props

  return (
    <div className={`textbox ${color}`}>
      <h3 className="title">{title}</h3>
      <p className="text">{content}</p>
      {/*link.text.length > 0 && <a className="link" href={link.link}>{link.text}</a>*/}
    </div>
  );
};

TextBox.propTypes = {
  
};

export default TextBox;