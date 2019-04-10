import React, { Component } from 'react';
import Layout from '../src/_layout'
import Card from '../src/components/Card'
import BoxContainer from '../src/components/BoxContainer';

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Card image="/static/images/card.png" title="Where we are" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <Card image="/static/images/card.png" title="What we do" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
          <Card image="/static/images/card.png" title="Really looooooooooong" content="Strong Women Network (SWN) has as a goal to create a meeting place for asylum seekers, newly arrived and already Sweden- established women in order to promote intercultural dialogue among women from different nationalities"/>
        </div>

        <div className="container">
          <BoxContainer>
            <h1></h1>
          </BoxContainer>
        </div>
      </Layout>
    );
  }
}

export default Index