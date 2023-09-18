import { configureStore } from "@reduxjs/toolkit";

import coordinateReducer from '../Redux Store/slices/coordinateSlice'
import hotelReducer from '../Redux Store/slices/hotelSlice'
import wishlistReducer from '../Redux Store/slices/wishlistSlice'


export const store = configureStore({
    reducer:{
      coordinates:coordinateReducer,
      hotel:hotelReducer,
      wishlist:wishlistReducer,
    
    }
})