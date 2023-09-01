import React from 'react';
import './HotelCard.css'; 

export const HotelCard = ({ hotel }) => {
  return (
    
    <div className="hotel-card">
      <div className="image-container">
        {hotel.images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:2000/${image.path}`}
            alt={image.originalname}
            className="hotel-image"
          />
        ))}
      </div>
      <div className="hotel-details">
        <h3>{hotel.hotelName}</h3>
        <p>
          <strong>Location:</strong> {hotel.location}, {hotel.state}<br />
          <strong>Price:</strong> ${hotel.price} per night<br />
          <strong>Amenities:</strong> {hotel.amenities.join(', ')}<br />
          <strong>Available Rooms:</strong> {hotel.availableRooms}<br />
          <strong>Property Type:</strong> {hotel.propertyType}
        </p>
        <div className="card-reviews">
          <h6>Reviews:</h6>
          {hotel.reviews.length === 0 ? (
            <p>No reviews available.</p>
          ) : (
            <ul>
              {hotel.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.username}</strong><br />
                  <strong>Rating:</strong> {review.rating}<br />
                  {review.reviewText}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
