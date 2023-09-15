import React,{useEffect, useState} from 'react'
import DatePicker from 'react-datepicker';
import { Navx } from '../components/Navbar'
import { useParams } from 'react-router-dom'
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'phosphor-react';
import axios from '../utils/AxiosInstance'
import {MapPinLine} from 'phosphor-react'
import 'react-datepicker/dist/react-datepicker.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HotelPage.css'


export const HotelPage = () => {

  
  const [hotel,setHotels] = useState()

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

 

    const {paramid} = useParams()

 
  useEffect(() => {

    const getSpecificHotel = async () => {

      try{
      
      const response = await axios.get(`/api/users/specifichotel/${paramid}`)
  
      setHotels(response.data.data)
    
    
     
      }
      catch(error){
        console.log("something went wrong")
      }
    }
  
    getSpecificHotel()
  },[paramid,])

 console.log('hoteldata',hotel)

 const hotelImages = hotel?.images || [];

 const longitude = hotel?.longitude || 0; 
const latitude = hotel?.latitude || 0; 


console.log('longitude',longitude)
console.log('latitude',latitude)

    const [viewport] = useState({
      latitude: 20.5937,
      longitude: 78.9629,
      zoom:3
        
      });

  return (
    <div>
        <div>
            <Navx/>
        </div>
        <div style={{margin:'20px'}}>
        <div className='main-hotel-page'>
      <div className='hotel-map'>
      <ReactMapGL
        initialViewState={viewport}
        transitionDuration="200"
        mapboxAccessToken="pk.eyJ1IjoicmFodWxyYWRoYWtyaXNobmFuIiwiYSI6ImNsbTRwOXpqaTQ4aGIzZHRoa3g3bW1md2UifQ.0Zau3s28QwARyY1b9t73Ow"
        mapStyle="mapbox://styles/rahulradhakrishnan/clm4jf19100uu01peeobb3f1y">

            <Marker
              latitude={latitude}
              longitude={longitude}
            >
              <div>
                <MapPin size={22} color='red' />
              </div>
            </Marker>
            </ReactMapGL>
      </div>
       
      {hotelImages.length > 0 ? (
       <div className='hotel-name'>
         <div className='primary-image'>
          <img src={hotel.images[0].url} alt="" className='primary-image' />
         </div> 
          <div className='pic-2'>
          <div >
            <img src={hotel.images[1].url} alt="" className='secondary-images' />
          </div>
          <div >
            <img src={hotel.images[2].url} alt="" className='secondary-images' />
          </div>
          </div>
          <div className='pic-2'>
          <div >
            <img src={hotel.images[3].url} alt="" className='secondary-images' />
          </div>
          <div >
            <img src={hotel.images[4].url} alt="" className='secondary-images' />
          </div>
         </div>
       </div>
       ) : (
        <p>No images available for this hotel.</p>
      )}
      </div>
        <div className='date-picker'>
        <div className="form-group">
        <label htmlFor="checkin" style={{display:"flex"}}>Check-In Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkout" style={{display:"flex"}}>Check-Out Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd-MM-yyyy" 
          minDate={startDate || new Date()} 
        />
      </div>
      <div className="form-group">
  <label htmlFor="roomsAndPeople">Rooms & People:</label>
  <input
    style={{width:'270px',display:"flex"}}
    type="text"
    id="roomsAndPeople"
    // value={`${numRooms} rooms| ${numPeople} people`}
    readOnly
  />
</div>
   </div>
      <div className='h-name'>
        <h2>{hotel?.hotelName}</h2>
        <div><MapPinLine size={18} color='green' />{hotel?.location}</div>
        <div style={{marginLeft:'20px'}}><b>{hotel?.state}</b></div>
      </div >
     
      

        </div>
    </div>
    

  )
}
