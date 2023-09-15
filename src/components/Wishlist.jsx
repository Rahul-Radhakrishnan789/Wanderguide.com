import React, { useEffect, useState } from 'react'
import axios from '../utils/AxiosInstance'
import { DisplayHotelList } from './DisplayHotelList';


export const Wishlist = () => {

  const [data,setData] = useState([])

    useEffect(() =>{
        const displayhotels = async () => {

            const userId = localStorage.getItem('authUserId')
    
            const response = await axios.get(`/api/users/displaywishlist/${userId}`)
    
            console.log(response.data.data)
    
          setData(response.data.data)
    
         
     }
             displayhotels()
    },[])

    

  return (
    data.length > 0 ? (
    <div style={{width:'800px',marginLeft:'250px'}}>
        <DisplayHotelList data={data}/>
    </div>
    ) :
    (
       <div style={{margin:'250px'}}>
       <b>Your wishlist is empty</b>
       </div> 
    )
    
  )
}
