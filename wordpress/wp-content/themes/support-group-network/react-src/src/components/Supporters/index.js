import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image'

const Supporters = props => {
  const { images } = props;

  return (
    <div className="supporters">
      { images.map((item, index) => {
        return <img src={item.src} alt={item.name} key={index} />
      })}
    </div>
  );
};

Supporters.propTypes = {
  images: PropTypes.array
};

export default Supporters;