import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Hero = (props) =>  {
  const {title, subtitle, image} = props
    return (
      <div className="hero" style={{backgroundImage: `url(${image})`}}>
        <div className="text">
          <h1><span className="hero-text">{ title }</span></h1>
          <h2><span className="text-lg yellow">{ subtitle }</span></h2>
        </div>
      </div>
    );
}

export default Hero;