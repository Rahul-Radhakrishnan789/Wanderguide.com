import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo4.png";
import { Heart } from "phosphor-react";
import { UserCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navx = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("authToken"))
  );

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar ">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="Logo" width={200} />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="px-3" onClick={() => navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link className="px-3" onClick={() => navigate('/adminlogin')}>Admin</Nav.Link>
            <Nav.Link
              onClick={() => navigate("/hotelownerlogin")}
              className="px-3"
            >
              Merchant
            </Nav.Link>
          </Nav>
          <Nav className="px-5">
            <Nav.Link className="px-3" onClick={() => navigate("/wishlist")}>
              <Heart size={20} />
            </Nav.Link>
            <Nav.Link className="px-3" onClick={() => navigate("/orders")}>
              My Bookings
            </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={() => handleLogout()} className="px-3">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => navigate("/loginpage")} className="px-3">
                Login
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Nav.Link className="px-3" onClick={() => navigate('/userdetails')}>
                <UserCircle size={32} />
              </Nav.Link>
            ) : (
              <Nav.Link>
                <button
                  onClick={() => navigate("/register")}
                  className="transparent-button"
                >
                  Sign up
                </button>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div></div>
    </div>
  );
};
