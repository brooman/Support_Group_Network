import React from 'react';

const Container = props => {
  const { children, title, wide } = props

  const isWide = wide ? 'wide' : ''

  return (
    <div className={`container ${isWide}`}>
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