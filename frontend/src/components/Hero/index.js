import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero extends Component {
  render() {
    return (
      <div class="hero" style={{backgroundImage: `url(/static/images/hero.png)`}}>
        <div class="text">
          <h1 className="heading">Support Group Network</h1>
          <h2 className="heading yellow">Working together for a better future</h2>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {

};

export default Hero;