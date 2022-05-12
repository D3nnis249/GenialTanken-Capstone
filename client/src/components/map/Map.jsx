import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdGpsFixed } from 'react-icons/md';
import { MapContainer, TileLayer, Popup, ZoomControl } from 'react-leaflet';
import LocationMarker from '../map/LocationMarker.jsx';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';

const mapToken = process.env.REACT_APP_API_KEY;

function Map({ stations, fuelValue }) {
  const [GPSButtonIsClicked, setGPSButtonIsClicked] = useState(false);
  {
    /* We will add this code later when we have a working map again.
    <ZoomControl position="topright" />
      <GPSButton
        onClick={() => {
          setGPSButtonIsClicked(true);
        }}>
        <MdGpsFixed />
      </GPSButton> */
  }
  return (
    <MapWrapper
      center={[52.500478, 13.376696]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}>
      <TileLayer
        url={
          'https://api.mapbox.com/styles/v1/alexf090/cl2uhl8gx008p14qop192uczn/tiles/256/{z}/{x}/{y}@2x?access_token=' +
          mapToken
        }
      />
      <MarkerCluster>
        {stations
          .filter(station => station.fuelPrices[fuelValue] !== null)
          .map(station => {
            return (
              <NewPopup
                key={station.id}
                position={[station.address.latitude, station.address.longitude]}
                autoClose={false}
                closeOnEscapeKey={false}
                closeButton={false}
                closeOnClick={false}>
                <Price>{station.fuelPrices[fuelValue].price + ' €'}</Price>
                <Link to={`/${station.id}`}>Mehr</Link>
              </NewPopup>
            );
          })}
        {GPSButtonIsClicked ? <LocationMarker /> : null}
      </MarkerCluster>
    </MapWrapper>
  );
}

const MarkerCluster = styled(MarkerClusterGroup)`
  height: 90vh;
`;

const MapWrapper = styled(MapContainer)`
  position: absolute;
  top: 6.25rem;
  right: 0;
  left: 0;
  bottom: 6rem;
  overflow: hidden;
  z-index: 10;
`;

const GPSButton = styled.button`
  position: absolute;
  text-align: center;
  right: 0.8px;
  top: 70px;
  height: 2rem;
  width: 2.1rem;
  line-height: 33px;
  margin: 10px;
  color: black;
  background-color: #fff;
  font-size: 22px;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  -webkit-background-clip: padding-box; //for Safari
  background-clip: padding-box; //for IE9+, Firefox 4+, Opera, Chrome
  z-index: 1000;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const NewPopup = styled(Popup)`
  padding: 0;
  .leaflet-popup-content-wrapper {
    text-align: center;
    border-radius: 5px;
  }
  .leaflet-popup-content {
    margin: 0;
  }
  .leaflet-popup-content p {
    margin: 0;
    font-size: 0.8rem;
    text-align: center;
  }
  .leaflet-popup-content a {
    text-decoration: none;
    color: #2196f3;
  }
`;

const Price = styled.p`
  margin: 0;
`;

export default Map;
