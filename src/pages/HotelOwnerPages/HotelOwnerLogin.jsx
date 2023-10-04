import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "../../utils/AxiosInstance";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { HotelOwnerHomePage } from "./HotelOwnerHomePage";

export const HotelOwnerLogin = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "+91" + "",
  });
  console.log(formData)

  const [showOTPModal, setShowOTPModal] = useState(false);

  const [otp, setOTP] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // console.log(otp);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/hoteowner/signup", formData);

      console.log(response.data.data);

      if (response) {
        const OTP = response.data.data;

        localStorage.setItem("OTP", OTP);
      }

      setShowOTPModal(true);
    } catch (error) {
      console.log("something went wrong ", error);
    }
  };

  const handleOTPSubmit = () => {
    const OTP = localStorage.getItem("OTP");

    if (OTP === otp) {
      setShowOTPModal(false);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const OTP = localStorage.getItem("OTP");
    if (OTP) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <div className="container mt-5" style={{ width: "400px" }}>
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="formPassword">
          <Form.Label>mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <br />
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>

      <Modal show={showOTPModal} onHide={() => setShowOTPModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formOTP">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleOTPSubmit}>
            Submit OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    <HotelOwnerHomePage />
  );
};
