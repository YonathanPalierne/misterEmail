import { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(){
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };


  const [coordinates, setCoordinates] = useState({lat:10.99835602, lng:77.01502627})
  const zoom = 11

  function handleClick({lat, lng}){
    setCoordinates({lat, lng})
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBcr7iXgAkkQYYkq0U14sFA3qJuOwpei7w" }}
        defaultCenter={coordinates}
        defaultZoom={zoom}
        onClick={handleClick}
      >
        <AnyReactComponent
        {...coordinates}
          // lat={coordinates.lat}
          // lng={coordinates.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}