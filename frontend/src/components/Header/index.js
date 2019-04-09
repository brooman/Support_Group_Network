import React from 'react';
import './header.scss'

const Header = (props) => {
  const {brand, navitems} = props;

  return (
    <header className="header">
        <div className="brand" href="/">
          <div className="brandlogo" src={brand.logo} alt={brand.name}/>
          <div>{brand.name}</div>
        </div>
      <nav className="navigation">
        {navitems.map((item) => {
          return (
          <a href={item.link} className={ item.isActive ? "active" : "" }>
            {item.name}
          </a>
          )
        })}
      </nav>
    </header>
  );
};

export default Header;