import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMapEvents, Marker, Popup } from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  });

  return position === null ? null : (
    <Marker position={position}>
      <NewPopup
        autoClose={false}
        closeOnEscapeKey={false}
        closeButton={false}
        closeOnClick={false}
        open={true}>
        Du bist hier !
      </NewPopup>
    </Marker>
  );
}

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

export default LocationMarker;
