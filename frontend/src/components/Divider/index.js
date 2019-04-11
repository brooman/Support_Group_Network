import React from 'react';
import PropTypes from 'prop-types';

const Divider = props => {
  const { children } = props

  const content = React.Children.map(children, child => {
    return React.cloneElement(child, {color: 'lightdark'});
  })

  return (
    <div class="divider">
      { content }
    </div>
  );
};

export default Divider;