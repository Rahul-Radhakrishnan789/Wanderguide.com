import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { DestinationCard } from './DestinationCard';
import kochi from '../assets/images/goa.jpg'
import delhi from '../assets/images/delhi.jpg'
import mumbai from '../assets/images/mumbai.jpg'
import hyderabad from '../assets/images/hyderabad.jpg'
import chennai from '../assets/images/chennai.jpg'
import bangalore1 from '../assets/images/bangalore1.jpg'
import pune from "../assets/images/pune.jpg"



const destinations = [
  { name: 'New Delhi', accommodations: '12,709 accommodations', image: delhi },
  { name: 'Mumbai', accommodations: '4,108 accommodations', image: mumbai },
  { name: 'Bangalore', accommodations: '5,283 accommodations', image: bangalore1 },
  { name: 'Hyderabad', accommodations: '2,678 accommodations', image: hyderabad },
  { name: 'Chennai', accommodations: '2,774 accommodations', image: chennai },
  { name: 'Kochi', accommodations: '1054 accommodations', image: kochi },
  { name: 'Pune', accommodations: '2025 accommodations', image: pune }

];

export const MainPage = () => {
  return (
    <div>
        <div style={{marginTop:"14px"}}><h3> Top City in India</h3></div>
    <div style={{marginTop:'10px' , overflowX: 'auto'}}>
    <Container>
      <Row>
      <Col style={{ display: 'flex', flexDirection: 'row' }}>
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            name={destination.name}
            accommodations={destination.accommodations}
            image={destination.image}
          />
        ))}
         </Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}
