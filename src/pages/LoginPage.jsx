import React from 'react'
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const Loginpage = () => {
  return (
    <>
    <div 
      className="h-auto w-25  align-content-center  justify-content-center  mt-5 "
      style={{
        paddingTop:'100px',
        marginLeft: "35%",
        borderRadius: "0px",
      }}
      >
   <Form>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      
      <Nav.Link
                    className="mt-3"
                    style={{ color: "blue" }}
                    // onClick={() => navigate("/singin")}
                  >
                   Already have an account ? Signup
                  </Nav.Link>
      <Button variant='success' type="submit" className='mt-4'>
                Login
              </Button>
   </Form>
      </div>
    </>
  );
}


  
