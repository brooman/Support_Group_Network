import React, { Component } from 'react';
import Layout from '../src/_layout'
import Container from '../src/components/Container';
import Card from '../src/components/Card'
import BoxContainer from '../src/components/BoxContainer';
import TextBox from '../src/components/TextBox'
import MasonryCard from '../src/components/MasonryCard'
import Divider from '../src/components/Divider';
import Image from '../src/components/Image';
import List from '../src/components/List';
import Supporters from '../src/components/Supporters';
import getPageContent from '../src/helpers/wordpressAPI';

class Index extends Component {

  constructor(props){
    super(props)

    /**
     * Load components into layout
     * this.<componentName> must be lowercase
     */
    this.container = Container;
    this.card = Card;
    this.boxcontainer = BoxContainer;
    this.textbox = TextBox;
    this.masonrycard = MasonryCard;
    this.divider = Divider;
    this.image = Image;
    this.list = List;
    this.supporters = Supporters;
    
  }

  state = {
    content: []
  }

  componentDidMount() {
    this.setState({
      content: getPageContent(location.pathname)
    })
  }

  createContent = (item) => {
    let children = [];

    item.type = item.name.split('/')[1]
    item.props = item.data.attributes
    item.children = item.data.innerBlocks

    if(item.children){
      item.children.map(child => {
        children.push(this.createContent(child))
      })
    }

    return React.createElement(this[item.type] ? this[item.type] : item.type, item.props, [...children])
  }

  render() {
    if(this.state.content) {
      return (
        <Layout>
        {this.state.content.map(item => {
          return this.createContent(item)
        })}
      </Layout>
    );
  }

  return (
    <div>404 Page not found</div>
  )
  }
}

export default Index