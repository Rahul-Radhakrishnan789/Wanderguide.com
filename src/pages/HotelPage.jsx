import React,{useEffect, useState,useRef} from 'react'
import DatePicker from 'react-datepicker';
import { Navx } from '../components/Navbar'
import { Footer } from '../components/Footer';
import { useParams } from 'react-router-dom'
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'phosphor-react';
import {PlusCircle } from 'phosphor-react'
import {MinusCircle } from 'phosphor-react'
import {CheckCircle} from 'phosphor-react'
import axios from '../utils/AxiosInstance'
import {MapPinLine} from 'phosphor-react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './HotelPage.css'



export const HotelPage = () => {


  const navigate = useNavigate()
  
  const [hotel,setHotels] = useState()

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showDifferentModal, setShowDifferentModal] = useState(false);
  const [numRooms, setNumRooms] = useState(1);
  const [numPeople, setNumPeople] = useState(1);
  const [rating, setRating] = useState(0)
  const [review,setReview] = useState('')

  const reviewInputRef = useRef(null);
  console.log(hotel)
  // console.log('endDtate',endDate)
  // console.log('startDate',typeof(startDate))
  // console.log('endDate',typeof(endDate))
  // console.log(numRooms)
  // console.log(numPeople)
  // console.log(rating)
  // console.log(review)




const addReview = async () => {
try{
  const userId =  localStorage.getItem('authUserId')

  const hotelId = hotel?._id
  console.log('hotelId',hotelId)

  const reviewTosend = {
    review:review,
    rating:rating,
  }

  const response = await axios.post(`/api/users/review/${userId}/${hotelId}`,reviewTosend)

  console.log(response.data.data)
  handleCloseDifferentModal() 
  
  if (reviewInputRef.current) {
    reviewInputRef.current.value = '';
  }
  
}
catch(error){
  console.error('error sending data ')
}

}


  const sendDetails = async() => {
    try{
      const hotelId = hotel?._id

     const userId = localStorage.getItem('authUserId')

      const dataToSend = {
        checkInDate:startDate,
        checkOutDate:endDate,
        roomNumber:numRooms,
        numberOfGuests:numPeople,
      }
     
      const response = await axios.post(`/api/users/hotelbooking/${userId}/${hotelId}`,dataToSend)

  console.log(response.data.data)

  localStorage.setItem('bookingId',response.data.data)

  navigate('/paymentpage')
    }
    catch(error){
      console.log('sending data failed')
    }
  }
  
 



  const handleDecreaseRooms = () => {
    if (numRooms > 1) {
      setNumRooms(numRooms - 1);
    }
  };
  
  const handleIncreaseRooms = () => {
    setNumRooms(numRooms + 1);
  };
  
  const handleDecreasePeople = () => {
    if (numPeople > 1) {
      setNumPeople(numPeople - 1);
    }
  };
  
  const handleIncreasePeople = () => {
    setNumPeople(numPeople + 1);
  };
  
 

    const {paramid} = useParams()

    const openModal = () => {
      setModalOpen(true);
    };
    
    const closeModal = () => {
      setModalOpen(false);
    };

    const handleShowDifferentModal = () => setShowDifferentModal(true);
    const handleCloseDifferentModal = () => setShowDifferentModal(false);
    
    const handleRating = (rate) => {
      setRating(rate)
    }



  
 
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
  },[paramid])



 const hotelImages = hotel?.images || [];

 const longitude = hotel?.longitude || 0; 
const latitude = hotel?.latitude || 0; 


// console.log('longitude',longitude)
// console.log('latitude',latitude)

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
    onClick={openModal}
    value={`${numRooms} Rooms | ${numPeople} People`}
    readOnly
  />
</div>
   </div>
   <div style={{display:'flex'}}>
   <div className='h-name'>
        <h2>{hotel?.hotelName}</h2>  <h6 className='property-type'>{hotel?.propertyType}</h6> 
        <div><MapPinLine size={18} color='green' />{hotel?.location}</div>
        <div style={{margin:'10px'}}><b>{hotel?.state}</b></div>
      </div >
      <div className='booking'>
        <div className='price-div'>
          
          <div className='price-section'>
          ₹{hotel?.price}/-
          </div>
          <div> <b>per night</b></div>
         </div> 
        <button onClick={sendDetails}>Book Now</button>
      </div>
   </div>
     
      <Modal show={isModalOpen} onHide={closeModal}>
          
          <Modal.Body>
            <div  className='modal-all'>
            <div  className='modal-button'>
              <div style={{marginRight:'30px'}}><b>Rooms:</b></div>
            <button 
             onClick={handleDecreaseRooms}
            ><MinusCircle size={18} /></button>
            <h6 >{numRooms}</h6>
            <button 
             onClick={handleIncreaseRooms}
            ><PlusCircle size={18} /></button>
            </div>
            <div  className='modal-button'>
            <div><b>People:</b></div>
            <button 
            onClick={handleDecreasePeople}
            ><MinusCircle size={18} /></button>
            <h6 >{numPeople}</h6>
            <button 
             onClick={handleIncreasePeople}
            ><PlusCircle size={18} /></button>
            </div>
            </div>
            <Button
             variant='success'
              style={{marginLeft:'380px'}}
              onClick={closeModal}
              > OK</Button>
           
          </Modal.Body>
      </Modal>
      <div>
      <div className='mt-5'><h5>Popular Amenities</h5></div>
      <div className='amenity-boxes'>
        {hotel?.amenities?.map((amenity,index) => (
          <div key={index} >
             <div className='amenities'><h5><CheckCircle size={28} color='#00ff00' />{amenity}</h5></div>
          </div>
      
        ))}
      </div>
      
      </div>
     <div style={{display:'flex'}}>
     <div className='review-page'>
     <div className="review-container">
          <textarea 
          ref={reviewInputRef}
          className="review-input" 
          rows="4" 
          placeholder="Write your review here..."
          onChange={(e) => setReview(e.target.value)}
          ></textarea>
    </div>
    <button className="submit-button" onClick={handleShowDifferentModal} >Submit</button>
    <Modal show={showDifferentModal} onHide={handleCloseDifferentModal}>
       
        <Modal.Body>
          <Rating onClick={handleRating} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={addReview}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <div className='display-review' >
    {hotel?.reviews?.map((review,index) => (
      <div key={index} className='single-review'>
        <div className='review-name-rating'>
        <p style={{marginLeft:'20px'}}><b>{review.userName}</b></p>
        <p style={{marginRight:'10px'}}><p style={{color:'orange'}}>{review.rating}/5</p></p>
        </div>
     <p  style={{marginLeft:'30px'}}>{review.review}</p>     
      </div>
     
    ))}
      </div>
    </div>

        </div>
        <Footer/>
    </div>
    

  )
}
