import React from 'react';

const Header = (props) => {
  const {brand, navitems} = props;

  return (
    <header className="header">
      <div className="brand" href="/">
        <img className="brandlogo" src={brand.logo} alt={brand.name}/>
      </div>
      <nav className="navigation">
        {navitems.map((item, index) => {

          return (
            <a href={item.link} className="navitem" key={index}>
              <span>
                {item.name}
              </span>
            </a>
          )
          
        })}
      </nav>
    </header>
  );
};

export default Header;