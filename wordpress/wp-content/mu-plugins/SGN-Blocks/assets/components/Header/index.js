import React from 'react';
import Icon from '../Icon'

class Header extends React.Component {

  constructor(props)
  {
    super(props)
  }

  state = {
    navigationOpen: false
  }

  toggleMenu = () => {
    this.setState({
      navigationOpen: !this.state.navigationOpen
    })
  }

  render(){
    const {brand, navitems} = this.props
    const navClasses = this.state.navigationOpen ? "navigation open" : "navigation"

    return (
      <>
        <header className="header">
          <div className="brand" href="/">
            <img className="brandlogo" src={brand.logo} alt={brand.name}/>
          </div>

          <div className={navClasses}>
            <nav className="navitems">
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
          </div>

          <div className="hamburger">
            <Icon icon="menu" onClick={this.toggleMenu} />
          </div>
        </header>
        <div className="header-offset" />
      </>
      );
  }
};

export default Header;