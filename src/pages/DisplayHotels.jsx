import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Navx } from "../components/Navbar";
import { useSelector } from "react-redux";
import { DisplayHotelList } from "../components/DisplayHotelList";

export const DisplayHotels = () => {
  const data = useSelector((state) => state.hotel.hotels);
  const [priceRangeFilters, setPriceRangeFilters] = useState([]);
  const [propertyTypeFilters, setPropertyTypeFilters] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const applyFilters = () => {
      let filteredData = data;

      if (priceRangeFilters.length > 0) {
        filteredData = filteredData.filter((hotel) => {
          if (priceRangeFilters.includes("less-than-1000")) {
            return hotel.price <= 1000;
          } else if (priceRangeFilters.includes("1001-5000")) {
            return hotel.price >= 1001 && hotel.price <= 5000;
          } else if (priceRangeFilters.includes("5001-10000")) {
            return hotel.price >= 5001 && hotel.price <= 10000;
          } else if (priceRangeFilters.includes("10001-20000")) {
            return hotel.price >= 10001 && hotel.price <= 20000;
          } else if (priceRangeFilters.includes("more-than-20000")) {
            return hotel.price >= 20001;
          }

          return false;
        });
      }

      if (propertyTypeFilters.length > 0) {
        filteredData = filteredData.filter((hotel) =>
          propertyTypeFilters.includes(hotel.propertyType)
        );
      }

      if (selectedAmenities.length > 0) {
        filteredData = filteredData.filter((hotel) =>
          selectedAmenities.some((amenity) => hotel.amenities.includes(amenity))
        );
      }

      setFilteredData(filteredData);
    };

    applyFilters();
  }, [priceRangeFilters, propertyTypeFilters, selectedAmenities, data]);

  const handlePriceRangeChange = (event) => {
    const value = event.target.value;
    if (priceRangeFilters.includes(value)) {
      setPriceRangeFilters(
        priceRangeFilters.filter((filter) => filter !== value)
      );
    } else {
      setPriceRangeFilters([...priceRangeFilters, value]);
    }
  };

  const handlePropertyTypeChange = (event) => {
    const value = event.target.value;
    if (propertyTypeFilters.includes(value)) {
      setPropertyTypeFilters(
        propertyTypeFilters.filter((filter) => filter !== value)
      );
    } else {
      setPropertyTypeFilters([...propertyTypeFilters, value]);
    }
  };

  const handleAmenityChange = (event) => {
    const amenity = event.target.value;
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navx />
      <div className="d-flex">
        <div
          className=""
          style={{
            maxHeight: "100%",
            display: "flex",
            background: "rgb(180,180,180)",
            padding: "50px",
          }}
        >
          <Form onSubmit={handleSubmit} style={{ marginLeft: "30px" }}>
            <div
              className="filter-section"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "250px",
              }}
            >
              <h5>Price Range</h5>
              <Form.Check
                type="checkbox"
                label="< 1000"
                value="less-than-1000"
                checked={priceRangeFilters.includes("less-than-1000")}
                onChange={handlePriceRangeChange}
              />

              <Form.Check
                type="checkbox"
                label="1001-5000"
                value="1001-5000"
                checked={priceRangeFilters.includes("1001-5000")}
                onChange={handlePriceRangeChange}
              />
              <Form.Check
                type="checkbox"
                label="5001-10000"
                value="5001-10000"
                checked={priceRangeFilters.includes("5001-10000")}
                onChange={handlePriceRangeChange}
              />
              <Form.Check
                type="checkbox"
                label="10001-20000"
                value="10001-20000"
                checked={priceRangeFilters.includes("10001-20000")}
                onChange={handlePriceRangeChange}
              />
              <Form.Check
                type="checkbox"
                label="> 20001"
                value="more-than-20000"
                checked={priceRangeFilters.includes("more-than-20000")}
                onChange={handlePriceRangeChange}
              />
            </div>
            <div
              className="filter-section"
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "450px",
              }}
            >
              <h5>Property Type</h5>
              <Form.Check
                type="checkbox"
                label="Hotel"
                value="Hotel"
                checked={propertyTypeFilters.includes("Hotel")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Resort"
                value="Resort"
                checked={propertyTypeFilters.includes("Resort")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Motel"
                value="Motel"
                checked={propertyTypeFilters.includes("Motel")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Guest House"
                value="Guest House"
                checked={propertyTypeFilters.includes("Guest House")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Hostel"
                value="Hostel"
                checked={propertyTypeFilters.includes("Hostel")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Entire apartment"
                value="Entire apartment"
                checked={propertyTypeFilters.includes("Entire apartment")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Homestay"
                value="Homestay"
                checked={propertyTypeFilters.includes("Homestay")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Tent"
                value="Tent"
                checked={propertyTypeFilters.includes("Tent")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Farm stay"
                value="Farm stay"
                checked={propertyTypeFilters.includes("Farm stay")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Entire bungalow"
                value="Entire bungalow"
                checked={propertyTypeFilters.includes("Entire bungalow")}
                onChange={handlePropertyTypeChange}
              />
              <Form.Check
                type="checkbox"
                label="Bed and breakfast"
                value="Bed and breakfast"
                checked={propertyTypeFilters.includes("Bed and breakfast")}
                onChange={handlePropertyTypeChange}
              />
              <br />
            </div>
            <div
              className="filter-section"
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "350px",
              }}
            >
              <h5>Popular Amenities</h5>

              <Form.Check
                type="checkbox"
                label="Free Wi-Fi"
                value="Free Wi-Fi"
                checked={selectedAmenities.includes("Free Wi-Fi")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Swimming Pool"
                value="Swimming Pool"
                checked={selectedAmenities.includes("Swimming Pool")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Fitness Center"
                value="Fitness Center"
                checked={selectedAmenities.includes("Fitness Center")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Free Breakfast"
                value="Free Breakfast"
                checked={selectedAmenities.includes("Free Breakfast")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Room Service"
                value="Room Service"
                checked={selectedAmenities.includes("Room Service")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Air Conditioning"
                value="Air Conditioning"
                checked={selectedAmenities.includes("Air Conditioning")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Spa and Wellness"
                value="Spa and Wellness"
                checked={selectedAmenities.includes("Spa and Wellness")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Business Center"
                value="Business Center"
                checked={selectedAmenities.includes("Business Center")}
                onChange={handleAmenityChange}
              />

              <Form.Check
                type="checkbox"
                label="Restaurant and Bar"
                value="Restaurant and Bar"
                checked={selectedAmenities.includes("Restaurant and Bar")}
                onChange={handleAmenityChange}
              />
            </div>
          </Form>
        </div>
        <div>
          <div style={{ marginLeft: "100px", width: "auto" }}>
            <DisplayHotelList
              data={filteredData.length > 0 ? filteredData : data}
            />
          </div>
        </div>
      </div>
    </>
  );
};
