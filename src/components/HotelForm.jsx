import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Sidebar } from './Sidebar';
import axios from 'axios';
import './HotelForm.css'

export const HotelForm = () => {
  const [formData, setFormData] = useState({
    hotelName: '',
    location: '',
    price: '',
    amenities: [],
    availableRooms: '',
    propertyType: '',
    images: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'amenities') {
      setFormData({
        ...formData,
        amenities: value.split(',')
      });
    }
    else{
    setFormData({
      ...formData,
      [name]: value
    });
  }
  };

  
  const handleImageUpload = (event) => {
    const files = event.target.files;
    setFormData({
      ...formData,
      images: files
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  

    try{

     const response = await axios.post('http://localhost:2000/api/hotelowner/addhotel',formData)

     console.log('Registration successful:', response.data.message);

    }
    catch (error) {
      console.error('Registration error:', error);
      console.log('Response:' , error.response);
    
  }
  
   
  };

  return (
    <div>
        <Sidebar/>
    <div className="form-container container mt-5" style={{width:'500px'}}>
      <h2 className='form-title'>Add Hotel Information</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="hotelName">
          <Form.Label>Hotel Name</Form.Label>
          <Form.Control
            type="text"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price per Night</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="amenities">
          <Form.Label>Amenities</Form.Label>
          <Form.Control
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleInputChange}
          />
           <Form.Text className="text-muted">
    Separate amenities with commas (e.g., Wi-Fi, Pool, Gym)
  </Form.Text>
        </Form.Group>
        <Form.Group controlId="availableRooms">
          <Form.Label>Available Rooms</Form.Label>
          <Form.Control
            type="number"
            name="availableRooms"
            value={formData.availableRooms}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="propertyType">
          <Form.Label>Property Type</Form.Label>
          <Form.Control
            as="select"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            required
          >
            <option value="Hotel">Hotel</option>
            <option value="Resort">Resort</option>
            <option value="Motel">Motel</option>
            <option value="Guest House">Guest House</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="images">
          <Form.Label className='image-upload-label'>Upload Images</Form.Label>
          <Form.Control
           accept=".png, .jpg, .jpeg"
            type="file"
            name="images"
            multiple
            onChange={handleImageUpload}
          />
        </Form.Group>
   
        <Button className="submit-button" variant="primary" type="submit">
          Add Hotel
        </Button>
      </Form>
    </div>
    </div>
  );
};


