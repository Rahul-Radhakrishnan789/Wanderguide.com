import React, { useEffect, useState } from 'react'
import { Navx } from '../components/Navbar'
import axios from '../utils/AxiosInstance'  
import './PaymentPage.css'


export const PaymentPage = () => {


 const [bookingData,setBookingData] = useState([])

 const [phoneNumberError, setPhoneNumberError] = useState('');

const totalPrice = bookingData[0]?.hotel?.price * bookingData[0]?.numberOfDays
 

const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    specialRequest:'',
    totalPrice:null,
});
console.log(formData)



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
      setPhoneNumberError('Please enter a valid 10-digit phone number');
    } else {
      setPhoneNumberError('');
    }

    setFormData({
      ...formData,
      phoneNumber,
    });
  };

  

  const handleClick = async () => {

    try{

        const bookingId  = localStorage.getItem('bookingId')

        const response = await axios.post(`/api/users/bookingfinal/${bookingId}`,formData)

        console.log(response.data.data)

    }
    catch(error){
        console.error('error:',error)
    }
  }

  const calculateTotalPrice = () => {
    if (bookingData.length > 0) {
      const totalPrice = bookingData[0]?.hotel?.price * bookingData[0]?.numberOfDays 
      const amountToBePaid = totalPrice + (18/100)*totalPrice
      setFormData({
        ...formData,
        totalPrice: amountToBePaid,
      });
    }
  };


 

    useEffect(()=>{

        const fetchData = async () => {
            try{
    
                const userId = localStorage.getItem('authUserId')
    
                const bookingId = localStorage.getItem('bookingId')
    
                const response = await axios.get(`/api/users/displayBookingDetails/${userId}/${bookingId}`)
    
                setBookingData([response.data.data])

               
            }
            catch{
                return console.log('error fetching data')
            }
        }

        fetchData()
    },[])

    useEffect(() => {
        calculateTotalPrice();
      }, [bookingData]);

    console.log("data is",bookingData)

  return (
    <div>
        <Navx/>
        <div style={{margin:'20px'}}>
        <div className='payment-details'>
           <h4>Payment Details</h4>
        </div>
     <div >
        <div className='payers-info'>
     <div className='heding'>
        <div style={({paddingLeft:'25px'})}>CheckIn</div>
        <div style={({paddingLeft:'75px'})}>CheckOut</div>
        <div  style={({paddingLeft:'45px'})}>Rooms</div>
        <div>Guests</div>
    </div>
        <div className='checkout-details'>
           
            <div>{bookingData[0]?.checkInDate.slice(0, 10)}</div>
            <div>{bookingData[0]?.checkOutDate.slice(0, 10  )}</div>
            <div>{bookingData[0]?.roomNumber}</div>
            <div>{bookingData[0]?.numberOfGuests}</div>
        </div>
        </div>
        </div>
        <div className='left-side'>
        <div>
    <div  className='divStyle'>
    <h4 >Important Information</h4>
      <ul>
        <li>Passport, Aadhar and Govt. ID are accepted as ID proof(s)</li>
        <li>Pets are not allowed.</li>
        <li>Outside food is not allowed</li>
        <li>Unmarried couples allowed</li>
      </ul>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 " style={{marginLeft:'20px',width:'400px'}}>
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
                className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              {phoneNumberError && (
                <div className="invalid-feedback">{phoneNumberError}</div>
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
 <div className='right-side'>
    <div>
        <h5 style={{borderBottom:'1px solid black'}}>Price Breakup</h5>
        <br />
        <div className='price-1'>
           <h6> {bookingData[0]?.roomNumber} Room x {bookingData[0]?.numberOfDays} Days</h6>
            <div><h6>₹{totalPrice}/-</h6></div>
        </div>
        <div className='price-1'>
            <h6>Taxes & Service Fees</h6>
            <div><h6>₹{(18/100)*totalPrice}/-</h6></div>
        </div>
        <div className='price-1'>
        <h5>Total Amount to be paid</h5>
        <div style={{color:'#4CAF50'}}><h5>₹ {(18/100)*totalPrice + totalPrice}</h5></div>
        </div>
    </div>
    <div className='payment-end'>
       hi
    </div>
    <button className='payment-button' onClick={handleClick}>Proceed To payment</button>
 </div>
</div>

        </div>
        
    </div>
  )
}
