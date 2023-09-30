import React from "react";
import { Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const nav = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("OTP");
    nav("/");
  };

  return (
    <div>
      <div className="sidebar">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link onClick={() => nav("/")}>Back To Home</Nav.Link>
          <Nav.Link onClick={() => nav("/ownerhotel")}>Your Hotels</Nav.Link>
          <Nav.Link onClick={() => nav("/hotelform")}>Create a Hotel</Nav.Link>
          <Button onClick={handleClick}>Logout</Button>
        </Nav>
      </div>
    </div>
  );
};
