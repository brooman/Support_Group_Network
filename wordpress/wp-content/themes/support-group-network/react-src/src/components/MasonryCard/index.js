import React from 'react';
import PropTypes from 'prop-types';

const MasonryCard = props => {
  const { children, title, content } = props;

  return (
    <div className="card">
      <div className="masonry">
        { children }
      </div>
      <h3><span className="text-lg lightdark">{title}</span></h3>
      <div className="card-content">
        <p className="text">{content}</p>
      </div>
      <a className="link" href="">Learn more...</a>
    </div>
  );
};

export default MasonryCard;