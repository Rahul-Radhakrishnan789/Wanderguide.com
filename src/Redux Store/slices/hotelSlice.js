import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hotels:[]
}

const hotelSlice = createSlice({
  name: 'hotels',
  initialState:initialState,
  reducers: {
    fetchHotels: (state, action) => {
        return { ...state, hotels:action.payload };
        
      
    },
  },
});

export const { fetchHotels} = hotelSlice.actions;
export default hotelSlice.reducer;
