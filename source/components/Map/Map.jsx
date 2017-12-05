import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import marker from './Marker.png'
import Item from './Container.jsx'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { compose, withProps, withStateHandlers } from "recompose"


const AnyReactComponent = ({ image }) => <div ><Item/></div>;


class Map extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var listObjects = []
    for(var i = 0; i < this.props.data.length; i++)
    {
      const marker = compose(
        withStateHandlers(() => ({
          isOpen: false,
        }), {
          onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
          })
        }),
        withScriptjs,
        withGoogleMap
      )(props =>

              <Marker
        position={{ lat:this.props.data[i]['latitude'] , lng:this.props.data[i]['longitude'] }}
        onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <div> {this.props.data} </div>
      </InfoWindow>}
    </Marker>);

      listObjects.push(marker)
        

    }

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 41.8781, lng: -87.6298 }}
      >
      {props.isMarkerShown && listObjects}
      </GoogleMap>
      ))
      return (
      <MyMapComponent
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsY60PGtxjEuHAS4KsRrfjirl-piCayYk&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />

      )
      // return (
      //   {withGoogleMap((this.props) =>
        //   <GoogleMap
        //     bootstrapURLKeys={{key: 'AIzaSyAsY60PGtxjEuHAS4KsRrfjirl-piCayYk'}}
        //     defaultCenter={this.props.center}
        //     defaultZoom={this.props.zoom}
        //     style={{height: '300px'}}
        //   >
        //   {listObjects}
        //   </GoogleMap>)}

        // ));
      }
    }
    Map.defaultProps = {
      center: {lat: 41.8781, lng: -87.6298},
      zoom: 15
    };

    export default Map;

