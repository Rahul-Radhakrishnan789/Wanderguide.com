import React from 'react'
import { Carousel } from 'react-bootstrap';
import img2 from '../assets/images/img2.jpg'
import img5 from '../assets/images/img5.jpg'
import img4 from '../assets/images/img4.jpg'
import img9 from '../assets/images/img9.jpg'
import img8 from '../assets/images/img8.jpg'
export const Headbg = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={3000}>
    <img 
      className=" w-100 h-100"
      style={{ maxHeight: '400px'  }}  
      src={img2}
      alt="" />
        <Carousel.Caption >
          <h3>G O A</h3>
          <p>Explore the finest beaches in india</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <img    className=" w-100 h-100"
       style={{ maxHeight: '400px'  }}
       src={img5}
       alt="" />
        <Carousel.Caption>
          <h3>KERALA</h3>
          <h4>Set a campfire on the highest hillstations</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img
  className=" w-100 h-100"
  style={{ maxHeight: '400px'  }}
  src={img4}
  alt=""
/>

        <Carousel.Caption>
          <h3>RAJASTHAN</h3>
          <h6>
         Book a camel safari
          </h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
    <img 
      className=" w-100 h-100"
      style={{ maxHeight: '400px'  }}  
      src={img9}
      alt="" />
        <Carousel.Caption >
        <h3>THE HIMALAYAS</h3>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
    <img 
      className=" w-100 h-100"
      style={{ maxHeight: '400px'  }}  
      src={img8}
      alt="" />
        <Carousel.Caption >
          <h3>BANGALORE</h3>
          <h5>Explore every city in india</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
  );
}


   

