import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  const { children, title } = props

  return (
    <div className={`container`}>
      {title && 
        <h2 className="container-title">
          <span className="text-lg lightdark">{title}</span>
        </h2>}
      <div className="container-content">
        {children}
      </div>
    </div>
  );
};

export default Container;