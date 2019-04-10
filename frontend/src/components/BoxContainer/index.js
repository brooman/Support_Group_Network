import React from 'react';

const BoxContainer = (props) => {
  const { children } = props

  return (
    <div className="box-container">
        { children }
    </div>
  );
};

export default BoxContainer;