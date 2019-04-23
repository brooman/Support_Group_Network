import React from 'react';
import PropTypes from 'prop-types';

const MasonryCard = props => {
  const { children, title, content, link } = props;

  return (
    <div className="card">
      <div className="masonry">
        { children }
      </div>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      {link && <a className="link" href={link.url}>{link.text}</a>}
    </div>
  );
};

export default MasonryCard; 