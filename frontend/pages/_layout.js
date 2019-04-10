import React, { Component } from 'react';
import Head from '../src/HtmlHead'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Content from '../src/components/Content'
import Hero from '../src/components/Hero'


class Layout extends Component {

  constructor(props){
    super(props)
  }

  state = {
    header: {
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
    },
    footer: {
      'information': ['Kungsladugårdsvägen 5', 'Restad Gård, 462 54 Vänersborg Sweden', '+4676-884 08 84', 'info@supportgroup.se'],
      'sections': [
        {
          'title': 'Contact',
          'links': [
            {
              'text': "Get in touch",
              'link': "/" 
            },
            {
              'text': "Get involved",
              'link': "/" 
            },
            {
              'text': "Where we are",
              'link': "/" 
            },
          ]
        },
        {
          'title': 'Integrity',
          'links': [
            {
              'text': "GDPR",
              'link': "/" 
            },
            {
              'text': "Cookies",
              'link': "/" 
            },
          ]
        },
        {
          'title': 'Friends',
          'links': [
            {
              'text': "Wir Project",
              'link': "/" 
            },
            {
              'text': "Fier Project",
              'link': "/" 
            },
          ]
        },
        {
          'title': 'Social',
          'links': [
            {
              'text': "Instagram",
              'link': "/" 
            },
            {
              'text': "Facebook",
              'link': "/" 
            },
            {
              'text': "Twitter",
              'link': "/" 
            }
          ]
        }
      ]
    }
  }

  render() {
    const { footer, header } = this.state
    const { children } = this.props
    return (
      <>
        <Head/>
        <Header brand={header.brand} navitems={header.navitems}/>
        <Hero />
        <Content>
          {children}
        </Content>
        <Footer information={footer.information} sections={footer.sections}></Footer>
      </>
    );
  }
}

export default Layout;