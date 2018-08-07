import React, { Component } from 'react';
import TwoColumn from '../layout/TwoColumn/TwoColumn';
import CardList from '../components/spaces/CardList/CardList';
import MegaMap from '../components/map/MegaMap/MegaMap';


class HomePage extends Component {
  render () {
    return (
      <TwoColumn 
        left={<CardList/>} 
        right={ 
          <MegaMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />}/>
    );
  }
}

export default HomePage;