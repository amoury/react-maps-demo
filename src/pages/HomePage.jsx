import React, { Component } from 'react';
import TwoColumn from '../layout/TwoColumn/TwoColumn';
import CardList from '../components/spaces/CardList/CardList';
import MegaMap from '../components/map/MegaMap/MegaMap';


class HomePage extends Component {
  render () {
    return (
      <TwoColumn left={<CardList/>} right={ <MegaMap/>}/>
    );
  }
}

export default HomePage;