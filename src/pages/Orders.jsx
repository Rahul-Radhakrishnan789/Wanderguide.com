import React, { useEffect, useState } from "react";
import axios from "../utils/AxiosInstance";
import "./Orders.css";

export const Orders = () => {
  const [orderDetails, setOrderDetails] = useState([]);

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
    <div className="orders-main">
      <h4>Orders</h4>
      <div className="orders-list">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "1200px",
            marginTop: "20px",
            borderBottom: "1px solid",
          }}
        >
          <h6>Order_id</h6>
          <h6>hotelName</h6>
          <h6>CheckIn</h6>
          <h6>CheckOut</h6>
          <h6>Amount</h6>
        </div>
        {orderDetails.map((orderData, index) => (
          <div key={index} className="order-details">
            <p>{orderData?.order_id}</p>
            <p>
              <b>{orderData?.hotel.hotelName}</b>
            </p>
            <p>{orderData?.checkInDate.slice(0, 10)}</p>
            <p>{orderData?.checkOutDate.slice(0, 10)}</p>
            <p>₹ {orderData?.totalPrice.toFixed(2)}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
};
