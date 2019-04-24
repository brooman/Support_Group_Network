import React, { Component } from 'react';
import Head from 'next/head';
import stylesheet from './styles/style.scss';

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Hero from './components/Hero'

const HtmlHead = () => {
  return (<Head>
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: stylesheet }}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Support Group Network</title>
  </Head>)
}


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
          'link': '/who-we-are',
        },
        {
          'name': 'What we do',
          'link': '/what-we-do',
        },
        {
          'name': 'Where we are',
          'link': '/where-we-are',
        },
        {
          'name': 'Job applications',
          'link': '/job-applications',
        },
        {
          'name': 'Get involved',
          'link': '/get-involved',
        },
        {
          'name': 'Donate',
          'link': '/donate',
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
        <HtmlHead/>
        <Header brand={header.brand} navitems={header.navitems}/>
        <Content>
          {children}
        </Content>
        <Footer information={footer.information} sections={footer.sections}></Footer>
      </>
    );
  }
}

export default Layout;