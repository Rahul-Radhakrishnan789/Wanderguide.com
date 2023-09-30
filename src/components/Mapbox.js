import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { MapPin } from "phosphor-react";
import { useDispatch } from "react-redux";
import { setCoordinates } from "../Redux Store/slices/coordinateSlice";
import "mapbox-gl/dist/mapbox-gl.css";

export const Mapbox = () => {
  const dispatch = useDispatch();

  const [viewport, setViewport] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 5,
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
      dispatch(setCoordinates({ longitude: lng, latitude: lat }));
    }
  };

  return (
    <div style={{ height: "560px" }}>
      <ReactMapGL
        initialViewState={viewport}
        width="100vw"
        height="100vh"
        transitionDuration="200"
        mapboxAccessToken="pk.eyJ1IjoicmFodWxyYWRoYWtyaXNobmFuIiwiYSI6ImNsbTRwOXpqaTQ4aGIzZHRoa3g3bW1md2UifQ.0Zau3s28QwARyY1b9t73Ow"
        mapStyle="mapbox://styles/rahulradhakrishnan/clm4jf19100uu01peeobb3f1y"
        onViewportChange={(newViewport) => {
          setViewport(newViewport);
        }}
        onClick={handleMapClick}
      >
        {marker ? (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            offsetLeft={-20}
            offsetTop={-10}
            draggable={true}
            onDragEnd={handleMapClick}
          >
            <div>
              <MapPin size={22} style={{ color: "red" }} />
            </div>
          </Marker>
        ) : null}
      </ReactMapGL>
    </div>
  );
};
