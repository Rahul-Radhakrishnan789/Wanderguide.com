import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const HotelOwnerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
 

 const Navigate = useNavigate()

  const handleLogin = () => {
    const envUsername = process.env.REACT_APP_USERNAME;
    const envPassword = process.env.REACT_APP_PASSWORD ;
    if (username === envUsername && password === envPassword) {

      Navigate("/hotelownerhomepage")
    }

    };


  return (
    <div className="container mt-5" style={{ width: '400px' }}>
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
       <br/>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
     
   
    </div>
  );
};


