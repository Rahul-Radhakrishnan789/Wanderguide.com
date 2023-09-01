import React, { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import axios from '../utils/AxiosInstance'
import { HotelCard } from './HotelsCard'

export const OwnerHotels = () => {

  const [hotels,setHotels] = useState([])

   useEffect(() =>{

    const hotelsData = async () => {
      try{
      const response = await axios.get('/api/hotelowner/displayhotels')
          
      setHotels(response.data.data)
  
  
      }
      catch(error){
        console.error('error displaying hotels :', error);
        console.log('Response:', error.response)
  
      }
     }
       hotelsData()
   },[])

   useEffect(() => {
    console.log('Updated hotels:', hotels);
  }, [hotels]);
  

  return (
    <div >
     <Sidebar/>
     <div className="row" style={{marginLeft:'250px'}}>
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
      </div>
        </div>
  )
}
