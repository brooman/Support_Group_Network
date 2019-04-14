import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
  const { src, size } = props

  const aspectRatio = size ? `is-${size}` : 'is-1x1'

  return (
    <div className={`image ${aspectRatio}`} style={{backgroundImage: `url('${src}')`}}/>
  );
};

export default Image;