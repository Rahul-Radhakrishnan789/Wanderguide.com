import React, { useEffect, useState } from "react";
import axios from "../../utils/AxiosInstance";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";
import "./ShowCoupons.css";

export const ShowCoupons = () => {
  const [coupons, setCoupons] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editedCoupon, setEditedCoupon] = useState({
    id: "",
    couponId: "",
    discount: "",
    minPurchase: "",
    expDate: "",
  });

  const displayCoupons = async () => {
    const response = await axios.get("/api/admin/displaycoupons");

    setCoupons(response.data.data);

    console.log(coupons);
  };

  const getColor = (discount) => {
    if (discount >= 100 && discount < 500) {
      return "custom-green-bg";
    } else if (discount >= 500 && discount < 1000) {
      return "custom-yellow-bg";
    } else if (discount >= 1000) {
      return "custom-blue-bg";
    }
  };

  const openEditModal = (coupon) => {
    setShowModal(true);
    setEditedCoupon({
      id: coupon._id,
      couponId: coupon.couponId,
      discount: coupon.discount,
      minPurchase: coupon.minPurchase,
      expDate: coupon.expDate,
    });
  };

  const closeEditModal = () => {
    setShowModal(false);
    setEditedCoupon({
      couponId: "",
      discount: "",
      minPurchase: "",
      expDate: "",
    });
  };

  const handleEditCoupon = async () => {
    try {
      const couponId = editedCoupon.id;

      const response = await axios.put(
        `/api/admin/editcoupon/${couponId}`,
        editedCoupon
      );

      if (response) {
        closeEditModal();
        const updatedCouponIndex = coupons.findIndex(
          (coupon) => coupon._id === couponId
        );
        if (updatedCouponIndex !== -1) {
          const updatedCoupons = [...coupons];
          updatedCoupons[updatedCouponIndex] = response.data.data;
          setCoupons(updatedCoupons);
        }
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  useEffect(() => {
    displayCoupons();
  }, []);

  return (
    <div>
      <Row>
        {coupons.map((coupon) => (
          <Col
            key={coupon.couponId}
            lg={3}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{ width: "250px", height: "auto", margin: "40px" }}
              className={getColor(coupon.discount)}
            >
              <Card.Body>
                <Card.Title> {coupon?.couponId}</Card.Title>
                <Card.Text>Discount: {coupon?.discount}</Card.Text>
                <Card.Text>Minimum Purchase: {coupon?.minPurchase}</Card.Text>
                <Card.Text>
                  Expiry Date: {coupon?.expDate.slice(0, 10)}
                </Card.Text>
              
              </Card.Body>
              <Button variant="primary" onClick={() => openEditModal(coupon)}>
                  Edit Coupon
                </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="discount">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter discount"
                value={editedCoupon.discount}
                onChange={(e) =>
                  setEditedCoupon({ ...editedCoupon, discount: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group controlId="minPurchase">
              <Form.Label>Minimum Purchase</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter minimum purchase"
                value={editedCoupon.minPurchase}
                onChange={(e) =>
                  setEditedCoupon({
                    ...editedCoupon,
                    minPurchase: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="expDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter expiration date"
                value={editedCoupon.expDate}
                onChange={(e) =>
                  setEditedCoupon({ ...editedCoupon, expDate: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditCoupon}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
