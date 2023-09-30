import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import axios from "../utils/AxiosInstance";
import { HotelCard } from "./HotelsCard";

export const OwnerHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const hotelsData = async () => {
      try {
        const response = await axios.get("/api/hotelowner/displayhotels");

        setHotels(response.data.data);
      } catch (error) {
        console.error("error displaying hotels :", error);
        console.log("Response:", error.response);
      }
    };
    hotelsData();
  }, []);

  const handleHotelDelete = (hotelId) => {
    const updatedHotelData = hotels.filter((hotel) => hotel._id !== hotelId);
    setHotels(updatedHotelData);
  };

  const handleHotelEdit = (hotelId, updatedData) => {
    const updatedHotelData = hotels.map((hotel) => {
      if (hotel._id === hotelId) {
        return { ...hotel, ...updatedData };
      }
      return hotel;
    });
    setHotels(updatedHotelData);
  };

  return (
    <div>
      <Sidebar />
      <div className="row" style={{ marginLeft: "250px" }}>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel._id}
            hotel={hotel}
            onDelete={handleHotelDelete}
            onEdit={handleHotelEdit}
          />
        ))}
      </div>
    </div>
  );
};
