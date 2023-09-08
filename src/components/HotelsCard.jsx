import React,{useState} from 'react';
import axios from '../utils/AxiosInstance'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './HotelCard.css'; 

export const HotelCard = ({ hotel,onDelete,onEdit }) => {

   const [showEditModal, setShowEditModal] = useState(false);

   const [editedHotel, setEditedHotel] = useState({
    hotelName: hotel.hotelName,
    location: hotel.location,
    price: hotel.price,
    amenities: hotel.amenities,
    availableRooms: hotel.availableRooms,
    propertyType: hotel.propertyType,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
   
      setEditedHotel((prev) => ({
        ...prev,
        [id]: value
      }));
  };



  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleUpdateClick = async() => {
    try{

    const updatedData = {...editedHotel};

    await axios.put(`/api/hotelowner/updatehotel/${hotel._id}`,updatedData)

    onEdit(hotel._id, updatedData);

      
        handleCloseEditModal();

    }

    catch(error){
      console.error('Error updating  hotel:', error);
      alert('Hotel updating failed.');

    }

  }


    const handleDeleteClick = async () => {
        try {
     
          await axios.delete(`/api/hotelowner/deletehotel/${hotel._id}`); 
          
         
          onDelete(hotel._id);
          
          alert('Hotel deleted successfully.');
        } catch (error) {
          console.error('Error deleting hotel:', error);
          alert('Hotel deletion failed.');
        }
      };
  return (
    
    <div className="hotel-card" >
      <div className="image-container">
        {hotel.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
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
        <div className="button-container">
  <button className="edit-button" onClick={handleEditClick}>Edit</button>
  <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
</div>
      </div>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          <div className="form-group">
            <label htmlFor="hotelName">Hotel Name</label>
            <input
              type="text"
              className="form-control"
              id="hotelName"
              value={editedHotel.hotelName}
              onChange={handleInputChange}
            />

            <label htmlFor="location">location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={editedHotel.location}
              onChange={handleInputChange}
            />

           <label htmlFor="price">price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={editedHotel.price}
              onChange={handleInputChange}
            />

            <label htmlFor="amenities">Amenities</label>
            <input
              type="text"
              className="form-control"
              id="amenities"
              value={editedHotel.amenities}
              onChange={handleInputChange}
            />
              <label htmlFor="availableRooms">AvailableRooms</label>
            <input
              type="text"
              className="form-control"
              id="availableRooms"
              value={editedHotel.availableRooms} 
              onChange={handleInputChange}
            />

            <label htmlFor="propertyType">PropertyType</label>
             <select
              className="form-control"
              id="propertyType"
              value={editedHotel.propertyType}
              onChange={handleInputChange}
              >
             <option value="Hotel">Hotel </option>
             <option value="Resort">Resort </option>
             <option value="Motel">Motel</option>
             <option value="Guest House">Guest House</option>
             <option value="Other">Other</option>
             </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
};
