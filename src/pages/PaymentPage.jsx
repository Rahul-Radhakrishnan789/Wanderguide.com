import React, { useEffect, useState } from "react";
import { Navx } from "../components/Navbar";
import axios from "../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./PaymentPage.css";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto', 
};


export const PaymentPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [coupons,setCoupons] = useState([])

  const [bookingData, setBookingData] = useState([]);

  const [phoneNumberError, setPhoneNumberError] = useState("");

  const totalPrice =
    bookingData[0]?.hotel?.price * bookingData[0]?.numberOfDays;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    specialRequest: "",
    totalPrice: null,
  });
  console.log(formData);

  const handleOrders = () => {
    localStorage.removeItem("bookingId");
    navigate("/orders");
  };

  const initPayment = (data) => {
    const options = {
      amount: data.amount,
      currency: data.currency,
      name: bookingData[0]?.hotel?.hotelName,
      description: "Test Transaction",
      image:
        "https://img.freepik.com/premium-vector/fast-play-symbol-logo-with-letter-f_45189-7.jpg?w=740",
      order_id: data.id,
      handler: async (response) => {
        try {
          const bookingId = localStorage.getItem("bookingId");

          const { data } = await axios.post(
            `/api/users/paymentend/${bookingId}`,
            response
          );
          console.log(data);
          if (data) {
            handleOrders();
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value;

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneNumberError("");
    }

    setFormData({
      ...formData,
      phoneNumber,
    });
  };

  const handleClick = async () => {
    try {
      const bookingId = localStorage.getItem("bookingId");

      const response = await axios.post(
        `/api/users/bookingfinal/${bookingId}`,
        formData
      );

      console.log(response.data.data);

      const { data } = await axios.post("/api/users/paymentstart", {
        amount: totalPrice + (18 / 100) * totalPrice,
      });
      initPayment(data.data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  const calculateTotalPrice = () => {
    if (bookingData.length > 0) {
      const totalPrice =
        bookingData[0]?.hotel?.price * bookingData[0]?.numberOfDays;
      const amountToBePaid = totalPrice + (18 / 100) * totalPrice;
      setFormData({
        ...formData,
        totalPrice: amountToBePaid,
      });
    }
  };

  const fetchCoupons = async() => {
    try
    {
    const response =await axios.get('/api/admin/displaycoupons')

    setCoupons(response.data.data)
    console.log(response.data.data)
    }
    catch(error){
      console.error("error:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("authUserId");

        const bookingId = localStorage.getItem("bookingId");

        const response = await axios.get(
          `/api/users/displayBookingDetails/${userId}/${bookingId}`
        );

        setBookingData([response.data.data]);
      } catch {
        return console.log("error fetching data");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    fetchCoupons();
  }, [bookingData]);

  console.log("data is", bookingData);

  return (
    <div>
      <Navx />
      <div style={{ margin: "20px" }}>
        <div className="payment-details">
          <h4>Payment Details</h4>
        </div>
        <div>
          <div className="payers-info">
            <div className="heding">
              <div style={{ paddingLeft: "25px" }}>CheckIn</div>
              <div style={{ paddingLeft: "75px" }}>CheckOut</div>
              <div style={{ paddingLeft: "45px" }}>Rooms</div>
              <div>Guests</div>
            </div>
            <div className="checkout-details">
              <div>{bookingData[0]?.checkInDate.slice(0, 10)}</div>
              <div>{bookingData[0]?.checkOutDate.slice(0, 10)}</div>
              <div>{bookingData[0]?.roomNumber}</div>
              <div>{bookingData[0]?.numberOfGuests}</div>
            </div>
          </div>
        </div>
        <div className="left-side">
          <div>
            <div className="divStyle">
              <h4>Important Information</h4>
              <ul>
                <li>
                  Passport, Aadhar and Govt. ID are accepted as ID proof(s)
                </li>
                <li>Pets are not allowed.</li>
                <li>Outside food is not allowed</li>
                <li>Unmarried couples allowed</li>
              </ul>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 "
                  style={{ marginLeft: "20px", width: "400px" }}
                >
                  <h5>Guest Details</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          phoneNumberError ? "is-invalid" : ""
                        }`}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                      {phoneNumberError && (
                        <div className="invalid-feedback">
                          {phoneNumberError}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="specialRequest" className="form-label">
                        Special Request
                      </label>
                      <textarea
                        className="form-control"
                        id="specialRequest"
                        name="specialRequest"
                        rows="3"
                        value={formData.specialRequest}
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div>
              <h5 style={{ borderBottom: "1px solid black" }}>Price Breakup</h5>
              <br />
              <div className="price-1">
                <h6>
                  {" "}
                  {bookingData[0]?.roomNumber} Room x{" "}
                  {bookingData[0]?.numberOfDays} Days
                </h6>
                <div>
                  <h6>₹{totalPrice.toFixed(0) || 0}/-</h6>
                </div>
              </div>
              <div className="price-1">
                <h6>Taxes & Service Fees</h6>
                <div>
                  <h6>₹{((18 / 100) * totalPrice).toFixed(2) || 0}/-</h6>
                </div>
              </div>
              <div className="price-1">
                <h5>Total Amount to be paid</h5>
                <div style={{ color: "#4CAF50" }}>
                  <h5>
                    ₹ {((18 / 100) * totalPrice + totalPrice).toFixed(2) || 0}
                  </h5>
                </div>
              </div>
            </div>
            <div className="payment-end">
            <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Coupons
          </Typography>
          {coupons.map((coupon) => (
            <div key={coupon.id}>
              <Typography variant="subtitle1">{coupon.couponId}</Typography>
              <Typography variant="body2">-{coupon.discount}</Typography>
              <Typography>hi</Typography>
              <hr />
            </div>
          ))}
        </Box>
      </Modal>
            </div>
            <button className="payment-button" onClick={handleClick}>
              Proceed To payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
