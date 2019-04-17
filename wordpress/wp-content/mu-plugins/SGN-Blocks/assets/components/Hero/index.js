import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Hero = (props) =>  {
    return (
      <div className="hero" style={{backgroundImage: `url(/static/images/hero.png)`}}>
        <div className="text">
          <h1><span className="hero-text">Support Group <br /> Network</span></h1>
          <h2><span className="text-lg yellow"> Working together for a better future</span></h2>
        </div>
      </div>
    );
}

export default Hero;