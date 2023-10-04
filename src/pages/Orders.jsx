import React, { useEffect, useState } from "react";
import axios from "../utils/AxiosInstance";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "./Orders.css";

export const Orders = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  const nav =  useNavigate()

  useEffect(() => {
    const fetchdata = async () => {
      const userId = localStorage.getItem("authUserId");

      const response = await axios.get(`/api/users/displayOrders/${userId}`);

      setOrderDetails(response.data.data);

      console.log(orderDetails);
    };

    fetchdata();
  }, []);

  return (
    <div style={{margin:'30px'}}>
    <TableContainer >
    <Table aria-label="User Table">
      <TableHead>
        <TableRow>
          <TableCell><strong>Order ID</strong></TableCell>
          <TableCell><strong>Hotel </strong></TableCell>
          <TableCell><strong>Grand Total</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orderDetails.map((order,index) => (
          <TableRow key={index}>
             <TableCell>{order.order_id}</TableCell>
            <TableCell>{order?.hotel.hotelName}</TableCell>  
            <TableCell>₹{order.totalPrice.toFixed(0)}/-</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <div style={{marginLeft:'550px',marginTop:'30px'}}>
    <Button variant="outlined" color="success" onClick={() => nav('/')}>
        Back To Home
      </Button>
  </div>
  </div>
  );
};
