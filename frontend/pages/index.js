import React, { Component } from 'react';
import Layout from '../src/_layout'
import Container from '../src/components/Container';
import Card from '../src/components/Card'
import BoxContainer from '../src/components/BoxContainer';
import TextBox from '../src/components/TextBox'
import MasonryCard from '../src/components/MasonryCard'
import Divider from '../src/components/Divider';
import Image from '../src/components/Image';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Container title="Test">
          <Card image="/static/images/card.png" title="Where we are" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow" link={{url: "/", text:"Learn more..."}}></TextBox>
          </BoxContainer>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
        </Container>

        <Divider>
          <TextBox title="Test title" content="Test Content"></TextBox>
        </Divider>

        <Container>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow" link={{url: "/", text:"Learn more..."}}></TextBox>
          </BoxContainer>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
          </BoxContainer>
        </Container>


        <Container wide>
          <MasonryCard title="Where we are" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities">
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <Image src="/static/images/card.png" /> 
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <Image src="/static/images/hero.png" />
            <Image src="/static/images/card.png" /> 
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
          </MasonryCard>
        </Container>
      </Layout>
    );
  }
}

export default Index