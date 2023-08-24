import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './sidebar.css'


export const Sidebar = () => {

    const nav = useNavigate()
  return (
    
     <div>
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link onClick={() => nav('/')} >Home</Nav.Link>
        <Nav.Link onClick={() => nav('/ownerhotel')}>Your Hotels</Nav.Link>
        <Nav.Link onClick={()=> nav('/hotelform')}>Create a Hotel</Nav.Link>
      </Nav>
    </div>
   
    </div>
    
  )
}