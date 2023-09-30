import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { OwnerHotels } from "../../components/OwnerHotels";

export const HotelOwnerHomePage = () => {
  return (
    <div>
      <Sidebar />
      <OwnerHotels />
    </div>
  );
};
