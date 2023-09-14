import React,{useState} from 'react'
import { Navx } from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'phosphor-react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HotelPage.css'


export const HotelPage = () => {

    const {paramid} = useParams()

    const hotels = useSelector((state) => state.hotel.hotels)

    const filteredHotels = hotels.filter((hotel) => hotel._id === paramid);

    const filteredHotel = filteredHotels[0];

    console.log('giggity:',filteredHotels)

    const [viewport] = useState({
        latitude: filteredHotel.latitude,
        longitude: filteredHotel.longitude,
        zoom: 8,
      });

  return (
    <div >
        <div>
            <Navx/>
        </div>
        <div className='main-hotel-page'>
      <div className='hotel-map'>
      <ReactMapGL
        initialViewState={viewport}
        transitionDuration="200"
        mapboxAccessToken="pk.eyJ1IjoicmFodWxyYWRoYWtyaXNobmFuIiwiYSI6ImNsbTRwOXpqaTQ4aGIzZHRoa3g3bW1md2UifQ.0Zau3s28QwARyY1b9t73Ow"
        mapStyle="mapbox://styles/rahulradhakrishnan/clm4jf19100uu01peeobb3f1y">

            <Marker
              latitude={filteredHotel.latitude}
              longitude={filteredHotel.longitude}
            >
              <div>
                <MapPin size={22} color='red' />
              </div>
            </Marker>
           
        
        </ReactMapGL>
      </div>

      </div>

    </div>
  )
}
