import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  const {onClick, icon, link} = props 

  return (
    <button className="icon" onClick={onClick}>
      <img src={`/static/icons/${icon}.svg`} />
    </button>
  );
};

Icon.propTypes = {
  
};

export default Icon;