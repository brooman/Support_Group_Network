import React, { Component } from 'react';
import Header from '../Header'
import '../../styles/style.scss';

class App extends Component {
  state = {
    brand: {
      name: "Support Group Network",
      logo: "https://www.supportgroup.se/wp-content/uploads/2018/02/whitelogo-230x82-1.png",
    },
    navitems: [
      {
        'name': 'Home',
        'link': '/',
        'isActive': true
      }
    ]
  }

  render() {
    const { brand, navitems } = this.state;

    return (
      <div id="App">
        <Header brand={brand} navitems={navitems}/>
      </div>
    );
  }
}

export default App;