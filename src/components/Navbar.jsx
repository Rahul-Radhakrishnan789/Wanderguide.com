import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/images/logo4.png"
import './Navbar.css'



export const Navx = () => {
  return (
    <div>
          <Navbar bg="success" data-bs-theme="dark" className='navbar'>
            <Container>
              <Navbar.Brand ><img src={Logo} alt="Logo" width={200}/> </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className='px-3' >Home</Nav.Link>
                <Nav.Link className='px-3'>Hotels</Nav.Link>
                <Nav.Link className='px-3'>Pricing</Nav.Link>
              </Nav>
              <Nav className="px-5">
                <Nav.Link className='px-3'>Contact now</Nav.Link>
                <Nav.Link className='px-3'>Cart</Nav.Link>
                <Nav.Link className='px-3'>Login</Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link><button className="transparent-button">Sign up</button></Nav.Link>
                </Nav>
            </Container>
          </Navbar>
          <div>
      
    </div>
      </div>
      );
    }
    
  
  