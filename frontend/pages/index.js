import React, { Component } from 'react';
import Head from '../src/HtmlHead'
import Header from '../src/components/Header'
class App extends Component {
  state = {
    brand: {
      name: "Support Group Network",
      logo: "/static/images/logo.png",
    },
    navitems: [
      {
        'name': 'Who we are',
        'link': '/',
      },
      {
        'name': 'What we do',
        'link': '/',
      },
      {
        'name': 'Where we are',
        'link': '/',
      },
      {
        'name': 'Job applications',
        'link': '/',
      },
      {
        'name': 'Get involved',
        'link': '/',
      },
      {
        'name': 'Donate',
        'link': '/',
      }
    ]
  }

  render() {
    const { brand, navitems } = this.state;

    return (
      <>
        <Head/>
        <Header brand={brand} navitems={navitems}/>
      </>
    );
  }
}

export default App;