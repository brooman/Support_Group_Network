import React from 'react';

const getLayout = (count) => {
  switch(count){
    case 1:
      return [{isLarge: true}]
    case 2:
      return [{isWide: true}, {isLarge: true}]
    case 3: 
      return [{}, {}, {isLarge: true}]
    case 4: 
      return [{isWide: true}, {}, {}, {isWide: true}]
    case 5:
      return [{}, {}, {isWide: true}, {}, {}]
    default:
      return [{}, {}, {}, {}, {}, {}]
  }
}

const BoxContainer = (props) => {
  const { children } = props

  const count = React.Children.count(children)
  const layout = getLayout(count)
  
  const content = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, layout[index]);
  })

  return (
    <div className={`box-container ${count === 1 ? 'single' : ''}`}>
      { content }
    </div>
  );
};

export default BoxContainer;