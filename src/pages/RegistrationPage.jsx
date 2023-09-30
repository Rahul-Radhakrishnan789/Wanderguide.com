import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../utils/AxiosInstance";

export const RegistrationPage = () => {
  const navigate = useNavigate();

  const initialValues = [
    {
        userName: "",
        password: "",
        email: "",
        city: "",
        state: "", 
        pinCode: "" 
    }
  ];

  const [loginValues, setLoginValues] = useState(initialValues);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/register", {
        userName: loginValues.userName,
        email: loginValues.email,
        password: loginValues.password,
        city: loginValues.city,
        state: loginValues.state,
        pinCode: loginValues.pinCode,
      });
      console.log("Registration successful:", response.data);

      setLoginValues(initialValues);

      navigate("/loginpage");
    } catch (error) {
      console.error("Registration error:", error);
      console.log("Response:", error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log(loginValues);
  };

  return (
    <>
      <div
        className=" w-50 d-flex  align-content-center  justify-content-center  mt-4  shadow"
        style={{
          marginLeft: "25%",
        }}
      >
        <div className="forming fw-bold p-5 ">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4"></Form.Group>
              <Form.Group as={Col} md="15">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="userName"
                    value={loginValues.userName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3"></Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                name="email"
                value={loginValues.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} md="4">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  required
                  name="city"
                  value={loginValues.city}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  required
                  name="state"
                  value={loginValues.state}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4">
                <Form.Label>PIN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="PIN"
                  required
                  name="pinCode"
                  value={loginValues.pinCode}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid PIN number
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                value={loginValues.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              SignUp
            </Button>
            <br></br>
            <nav>
              <label>
                Already have an account . . .?
                <Nav.Link
                  style={{ color: "blue" }}
                  onClick={() => navigate("/loginpage")}
                >
                  Login
                </Nav.Link>
              </label>
            </nav>
          </Form>
        </div>
      </div>{" "}
      <br></br>
    </>
  );
};
