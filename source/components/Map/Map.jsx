import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import marker from './Marker.png'

const AnyReactComponent = ({ image }) => <div ><img src = {marker} /></div>;


var markers = [];

markers.push([41.8781, -87.6298, marker]);
markers.push([41.9781, -87.6298, marker])

var lat_col = markers.map(function(value,index) { return value[0]; });
var lng_col = markers.map(function(value,index) { return value[1]; });
var img_col = markers.map(function(value,index) { return value[2]; });
class Map extends Component {
  constructor(props){
    super(props);
    // this.props.data will have all the data
  }

  render() {
  	var listObjects = []
  	for(var i = 0; i < lat_col.length; i++)
      {
      	listObjects.push(
        <AnyReactComponent
          lat={lat_col[i]}
          lng = {lng_col[i]}
          image = {img_col[i]}
        />)

      }
     console.log(listObjects)
    return (
      <GoogleMapReact
      	bootstrapURLKeys={{key: 'AIzaSyAsY60PGtxjEuHAS4KsRrfjirl-piCayYk'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{height: '300px'}}
      >
      {listObjects}
      </GoogleMapReact>

    );
  }
}
Map.defaultProps = {
  center: {lat: 41.8781, lng: -87.6298},
  zoom: 15
};

export default Map;
