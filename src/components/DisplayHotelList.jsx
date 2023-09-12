import React, { useState } from 'react';
import { AnchorSimple } from 'phosphor-react';
import {Heart} from 'phosphor-react'
import './Displayhotellist.css'

export const DisplayHotelList = ({ data }) => {

    const [wishList, setWishList] = useState([])

    const handleWishlist = async(hotelId) => {
        
        try {
            if (wishList.includes(hotelId)) {
              // Remove from the wishlist locally
              setWishList(wishList.filter((id) => id !== hotelId));
          
              // Remove from the backend
             
            } else {
              // Add to the wishlist locally
              setWishList([...wishList, hotelId]);
         
              // Add to the backend
             
            }
          } catch (error) {
            console.error('Error toggling wishlist:', error);
          }

    }
    
  return (
    <div  >
      <div className="hotel-list" >
        {data.map((hotel) => (
          <div key={hotel._id} className="col mt-5" style={{border:'solid 1px',borderColor:'rgb(180,180,180)', borderRadius:'10px'}}>
            <div className="hotel-item" style={{diaplay:'flex'}}>
              <div className="hotel-image-section">
                <img src={hotel.images[0].url} alt="" className="hotel-image" />
                <div className="hotel-thumbnail-container">
                  <div>
                    <img src={hotel.images[1].url} alt="" className="hotel-thumbnail" />
                  </div>
                  <div>
                    <img src={hotel.images[2].url} alt="" className="hotel-thumbnail" />
                  </div>
                  <div>
                    <img src={hotel.images[3].url} alt="" className="hotel-thumbnail" />
                  </div>
                  <div>
                    <img src={hotel.images[4].url} alt="" className="hotel-thumbnail" />
                  </div>
                </div>
              </div>
              <div className="hotel-info-section">
                <div>
                  <h4>{hotel.hotelName}</h4>
            </div>
                <div className="hotel-location">
                  <p style={{color:'green'}}><AnchorSimple size={17} /> {hotel.location}</p>
                </div>
                <div className='propertytype-container'>
                    <b>{hotel.propertyType}</b>
                </div>
                <h6><b>This hotel provides</b>:</h6>
                <div  className="flex-container">
                {hotel.amenities.map((amenity, index) => (
                 <div className="amenity-box" key={index}>
                           {amenity}
                 </div>
                ))}
                <div className="amenity-box" >
                    more+
                </div>
            </div>
            
            {hotel.availableRooms > 0 ? (
                  <div className='rooms-available'>
                    <b>Rooms Available</b>
                  </div>
                ) : (
                  <div className='noroom-availabe'>
                    <b>No Rooms Available</b>
                  </div>
                )}
                  <div className='price-details'>
           <h3>Rs:{hotel.price}/-</h3>
       
            </div>
                
              </div>
             <button className={`heart ${wishList.includes(hotel._id) ? 'active' : ''}`} 
             onClick={() => handleWishlist(hotel._id)}
              ><Heart size={32}/></button>
            
            </div>
          
            
          </div>
        ))}
      </div>
     
    </div>
  );
};


