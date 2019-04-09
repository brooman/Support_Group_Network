import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  const {text, type} = props

  let el;

  switch(type)
  {
    case "main":
      el = `<h1></h1>`
      break;
    case "primary":
      el = `<h2></h2>`
      break;
    case "secondary":
      el = `<h3></h3>`
      break;
    default: 
      el = `<p></p>`
  }

  return (
      <h2>
      {text}
      </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string
};

Title.defaultProps = {
  text: "Placeholder Title",
  type: "primary",
  color: "#000"
};

export default Title;