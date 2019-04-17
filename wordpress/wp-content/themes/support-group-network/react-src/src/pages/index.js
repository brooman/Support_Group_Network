import React, { Component } from 'react';
import Layout from '../_layout'
import Container from '../components/Container';
import Card from '../components/Card'
import BoxContainer from '../components/BoxContainer';
import TextBox from '../components/TextBox'
import MasonryCard from '../components/MasonryCard'
import Divider from '../components/Divider';
import Image from '../components/Image';
import List from '../components/List';
import Supporters from '../components/Supporters';

class Index extends Component {
  render() {
    return (
      <Layout>
        <Container title="Test">
          <Card image="/static/images/card.png" title="Where we are" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="red"></TextBox>
            <TextBox title="Test title" content="Test Content" color="blue"></TextBox>
            <TextBox title="Test title" content="Test Content" color="green" link={{url: "/", text:"Learn more..."}}></TextBox>
          </BoxContainer>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
        </Container>

        <Divider>
          <TextBox title="Test title" content="Test Content"></TextBox>
        </Divider>

        <Container>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="red"></TextBox>
            <TextBox title="Test title" content="Test Content" color="green"></TextBox>
            <TextBox title="Test title" content="Test Content" color="yellow" link={{url: "/", text:"Learn more..."}}></TextBox>
          </BoxContainer>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <BoxContainer>
            <TextBox title="Test title" content="Test Content" color="lightdark"></TextBox>
          </BoxContainer>
        </Container>


        <Container wide>
          <MasonryCard title="Where we are" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities">
            <TextBox title="Test title" content="Test Content" color="red"></TextBox>
            <Image src="/static/images/card.png" /> 
            <TextBox title="Test title" content="Test Content" color="yellow"></TextBox>
            <TextBox title="Test title" content="Test Content" color="blue"></TextBox>
            <Image src="/static/images/hero.png" />
            <Image src="/static/images/card.png" /> 
            <TextBox title="Test title" content="Test Content" color="red"></TextBox>
          </MasonryCard>
        </Container>

        <Container>
          <List wide title="List test" items={["Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities", "Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"]} /> 
          <TextBox title="Test title" content="Test Content" color="green"></TextBox>
        </Container>

        <Container>
          <Supporters images={[{name:"123", src:"/static/images/supporter.png"}, {name:"123", src:"/static/images/supporter.png"}, {name:"123", src:"/static/images/supporter.png"}, {name:"123", src:"/static/images/supporter.png"}, {name:"123", src:"/static/images/supporter.png"}]}/>
        </Container>

      </Layout>
    );
  }
}

export default Index