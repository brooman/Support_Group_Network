import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  const { children, title, wide } = props
  
  const isWide = wide ? 'wide' : '';

  return (
    <div className={`list ${isWide}`}>
      <h3>{title}</h3>
      <ul>
        { React.Children.map(children, (item, index) => {
          return <li className="list-item" key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
  Items: PropTypes.array
};

export default List;