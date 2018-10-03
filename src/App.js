import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';

class App extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFjaWVrbXAiLCJhIjoiY2prbzVxcWZrMTRwcDNzdGhpdXZ4bTI3aiJ9.Jwgft0ZNf9quXGe-JVYfWA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }
  render() {
    return (
      <div id="map" style={{ height: '100vg' }}>
      </div>
    );
  }
}

export default App;
