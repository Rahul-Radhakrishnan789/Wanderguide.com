

import { createSlice } from '@reduxjs/toolkit';

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: {
    longitude: '',
    latitude: '',
  },
  reducers: {
    setCoordinates: (state, action) => {
      state.longitude = action.payload.longitude;
      state.latitude = action.payload.latitude;
    },
  },
});

export const { setCoordinates } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
