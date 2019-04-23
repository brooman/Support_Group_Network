import React from 'react';

const Supporters = props => {
  //Children should be <img> elements
  const { children } = props;

  return (
    <div className="supporters">
        { children }
    </div>
  );
};

export default Supporters;