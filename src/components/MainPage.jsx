import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { DestinationCard } from './DestinationCard';
import kochi from '../assets/images/goa.jpg'
import delhi from '../assets/images/delhi.jpg'
import mumbai from '../assets/images/mumbai.jpg'
import hyderabad from '../assets/images/hyderabad.jpg'
import chennai from '../assets/images/chennai.jpg'
import bangalore1 from '../assets/images/bangalore1.jpg'
import kerala from '../assets/images/kerala.jpg'
import rajasthan from '../assets/images/rajasthan.jpg'
import himachal from '../assets/images/himachalpradesh.jpg'
import kashmir  from '../assets/images/kashmir.jpg'
import karnataka from '../assets/images/karnataka.jpg'
import meghalaya from '../assets/images/meghalaya.jpg'
// import pune from "../assets/images/pune.jpg"



const destinations = [
  { name: 'New Delhi', accommodations: '12,709 accommodations', image: delhi },
  { name: 'Mumbai', accommodations: '4,108 accommodations', image: mumbai },
  { name: 'Bangalore', accommodations: '5,283 accommodations', image: bangalore1 },
  { name: 'Hyderabad', accommodations: '2,678 accommodations', image: hyderabad },
  { name: 'Chennai', accommodations: '2,774 accommodations', image: chennai },
  { name: 'Kochi', accommodations: '1,054 accommodations', image: kochi },
  // { name: 'Pune', accommodations: '2,025 accommodations', image: pune }

];

const states = [
  { name: 'Himachal Pradesh',touristspots: '543 Tourist places', image:himachal },
  { name: 'Karnataka', touristspots: '216 Tourist places', image: karnataka },
  { name: 'Kerala', touristspots: '389 Tourist places', image:kerala },
  { name: 'Meghalaya', touristspots: '289 Tourist places', image:meghalaya },
  { name: 'Kashmir', touristspots: '689 Tourist places', image: kashmir},
  { name: 'Rajasthan', touristspots: '489 Tourist places', image: rajasthan}
];

export const MainPage = () => {
  return (
    <div>
    <div>
        <div style={{marginTop:"14px"}}><h3> Top City in India</h3></div>
    <div style={{marginTop:'10px',width:'80%'}}>
    <Container >
      <Row>
      <Col style={{ display: 'flex', flexDirection: 'row',}}>
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
    <div><h3>Top States In India</h3></div>
    <div style={{ marginTop: '10px',width:'80%' }}>
        <Container>
          <Row>
            <Col style={{ display: 'flex', flexDirection: 'row' }}>
              {states.map((state, index) => (
                <DestinationCard
                  key={index}
                  name={state.name}
                  accommodations={state.touristspots}
                  image={state.image}
                />
              ))}
            </Col>
          </Row>
        </Container>
        </div>
    </div>
  )
}
