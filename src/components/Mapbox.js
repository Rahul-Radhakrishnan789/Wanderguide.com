import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'phosphor-react';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Mapbox = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10  ,
  });

  const [marker, setMarker] = useState(null);

  const handleMapClick = (event) => {
    const { lngLat } = event; 
  
    if (lngLat) {
      const { lng, lat } = lngLat;
      setMarker({
        latitude: lat,
        longitude: lng,
      });
    }
    console.log(marker)
  };


  return (
    <div style={{ width: '900p', height: '560px' ,}}>
      <ReactMapGL
        initialViewState={viewport}
        width="100vw"
        height="100vh"
        transitionDuration="200"
        mapboxAccessToken="pk.eyJ1IjoicmFodWxyYWRoYWtyaXNobmFuIiwiYSI6ImNsbTRwOXpqaTQ4aGIzZHRoa3g3bW1md2UifQ.0Zau3s28QwARyY1b9t73Ow"
        mapStyle="mapbox://styles/rahulradhakrishnan/clm4jf19100uu01peeobb3f1y"
        onViewportChange={(newViewport) => {setViewport(newViewport)}}
        onClick={handleMapClick}
       
        
      >
        {marker && (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            draggable={true}
            onDragEnd={handleMapClick}
          >
            <div><MapPin size={22} style={{color:'red'}}/></div>
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
};


