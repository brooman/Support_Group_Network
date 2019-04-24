import React from 'react';
import PropTypes from 'prop-types';

const MasonryCard = props => {
  const { children, title, content, linkUrl, linkText } = props;

  return (
    <div className="card wide">
      <div className="masonry">
        { children }
      </div>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      {linkUrl && <a className="link" href={linkUrl}>{linkText}</a>}
    </div>
  );
};

export default MasonryCard; 