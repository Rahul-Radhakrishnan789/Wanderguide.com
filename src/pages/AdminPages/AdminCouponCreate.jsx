import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "../../utils/AxiosInstance";

export const AdminCoupon = () => {
  const [formData, setFormData] = useState({
    couponName: "",
    discount: "",
    expDate: "",
    minPurchase: "",
  });

  console.log(formData);

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const errors = {};

      if (!formData.couponName.match(/^[A-Z]{5,15}$/)) {
        errors.couponName = "Coupon name must be 5 to 15 capital letters.";
      }

      if (!formData.discount) {
        errors.discount = "Discount is required.";
      } else if (isNaN(formData.discount)) {
        errors.discount = "Discount must be a number.";
      }

      if (!formData.expDate) {
        errors.expDate = "Expiration date is required.";
      }

      if (!formData.minPurchase) {
        errors.minPurchase = "Minimum purchase amount is required.";
      } else if (isNaN(formData.minPurchase)) {
        errors.minPurchase = "Minimum purchase amount must be a number.";
      }

      setValidationErrors(errors);

      if (Object.keys(errors).length > 0) {
        return;
      } else {
        const response = await axios.post("/api/admin/addcoupon", formData);

        console.log(response.data.data);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh", maxWidth: "700px" }}
      >
        <Form
          onSubmit={handleSubmit}
          style={{
            width: "400px",
            padding: "20px",
            margin: "20px",
            border: "1px solid",
          }}
        >
          <Form.Group controlId="couponName">
            <Form.Label>Coupon Name</Form.Label>
            <Form.Control
              type="text"
              name="couponName"
              placeholder="Enter coupon name (5-15 capital letters)"
              value={formData.couponName}
              onChange={handleChange}
              className={validationErrors.couponName ? "is-invalid" : ""}
            />
            {validationErrors.couponName && (
              <div className="invalid-feedback">
                {validationErrors.couponName}
              </div>
            )}
          </Form.Group>
          <br />
          <Form.Group controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              type="text"
              name="discount"
              placeholder="Enter discount"
              value={formData.discount}
              onChange={handleChange}
              className={validationErrors.discount ? "is-invalid" : ""}
            />
            {validationErrors.discount && (
              <div className="invalid-feedback">
                {validationErrors.discount}
              </div>
            )}
          </Form.Group>
          <br />
          <Form.Group controlId="expDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="date"
              name="expDate"
              placeholder="Enter expiration date"
              value={formData.expDate}
              onChange={handleChange}
              className={validationErrors.expDate ? "is-invalid" : ""}
            />
            {validationErrors.expDate && (
              <div className="invalid-feedback">{validationErrors.expDate}</div>
            )}
          </Form.Group>
          <br />
          <Form.Group controlId="minPurchase">
            <Form.Label>Minimum Purchase</Form.Label>
            <Form.Control
              type="text"
              name="minPurchase"
              placeholder="Enter minimum purchase amount"
              value={formData.minPurchase}
              onChange={handleChange}
              className={validationErrors.minPurchase ? "is-invalid" : ""}
            />
            {validationErrors.minPurchase && (
              <div className="invalid-feedback">
                {validationErrors.minPurchase}
              </div>
            )}
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
