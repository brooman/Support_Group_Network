import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const { image, size } = props

  const aspectRatio = size ? `is-${size}` : 'is-1x1'

  return (
      <div className={`image ${aspectRatio}`} style={{backgroundImage: `url('${image}')`}}/>
  );
};

export default Image;