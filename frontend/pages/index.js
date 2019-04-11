import React, { Component } from 'react';
import Layout from '../src/_layout'
import Card from '../src/components/Card'
import BoxContainer from '../src/components/BoxContainer';
import TextBox from '../src/components/TextBox'

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Card image="/static/images/card.png" title="Where we are" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow" link={{url: "/", text:"Learn more..."}}></TextBox>
          </BoxContainer>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
        </div>

        <div className="container">
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow" link={{url: "/", text:"Learn more..."}}></TextBox>
          </BoxContainer>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
          </BoxContainer>
        </div>
      </Layout>
    );
  }
}

export default Index