import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState:initialState,
  reducers: {
    fetchHotels: (state, action) => {
      state.hotels = action.payload;
      console.log('what the heck',state.hotels)
    },
  },
});

export const { fetchHotels} = hotelSlice.actions;
export default hotelSlice.reducer;
