import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container style={{ opacity: 0.7 }}>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>
              Welcome to our travel booking platform! We are dedicated to
              providing you with the best travel experiences. Whether you're
              looking for a relaxing beach getaway or an adventurous mountain
              expedition, we have the perfect options for you.
            </p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <address>
              123 Main Street <br />
              City, Country <br />
              Email: info@example.com <br />
              Phone: +123-456-7890
            </address>
          </Col>
          <Col md={4}>
            <h4>Follow Us</h4>
            <div className="social-icons" style={{ margin: "5px" }}>
              <a href="https://www.facebook.com/" style={{ margin: "5px" }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/home" style={{ margin: "5px" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/" style={{ margin: "5px" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
