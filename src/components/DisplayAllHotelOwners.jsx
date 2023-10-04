import React from 'react'
import { useState } from 'react'
import axios from "../utils/AxiosInstance";
import { useEffect } from 'react';


export const DisplayAllHotelOwners = () => {
    const [hotelOwners,setHotelOwners] =useState([])
console.log(hotelOwners)

    const fetchHotelOwners = async() => {
        try{
            const response = await axios.get('/api/admin/fetchhotelowners')

            if(response){
                setHotelOwners(response.data.data)
            }
        }
        catch(error){
            console.log('something went wrong')
        }
    }

    useEffect(() => {
        fetchHotelOwners()
    },[])
  return (
    <div>DisplayAllHotelOwners</div>
  )
}
