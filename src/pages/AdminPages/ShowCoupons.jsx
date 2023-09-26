import React, { useEffect, useState } from 'react'
import axios from '../../utils/AxiosInstance'
import { Card, Button, Row, Col } from 'react-bootstrap';
import "./ShowCoupons.css"

export const ShowCoupons = () => {

    const [coupons,setCoupons] = useState([])

    const displayCoupons = async() => {

       const response = await axios.get('/api/admin/displaycoupons')

       setCoupons(response.data.data)

       console.log(coupons) 
    }

    const getColor = (discount) => {

        if (discount >= 100 && discount < 500) {
          return 'custom-green-bg'
        } else if (discount >= 500 && discount < 1000) {
          return 'custom-yellow-bg'; 
        } else if (discount >= 1000){
          return 'custom-blue-bg'; 
        }
      };

    useEffect(() => {
        displayCoupons()
    },[])


  return (
    <div>
         <Row>
        {coupons.map((coupon) => (
          <Col key={coupon.couponId} lg={6} md={12} style={{display:'flex',justifyContent:'center',}}>
            <Card
              style={{ width: '400px', height: '220px', margin: '40px', }}
              className={getColor(coupon.discount)} 
            >
              <Card.Body>
                <Card.Title> {coupon?.couponId}</Card.Title>
                <Card.Text>Discount: {coupon?.discount}</Card.Text>
                <Card.Text>Minimum Purchase: {coupon?.minPurchase}</Card.Text>
                <Card.Text>Expiry Date: {coupon?.expDate.slice(0,10)}</Card.Text>
                <Button variant="primary">Edit Coupon</Button>
              </Card.Body>
             
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
