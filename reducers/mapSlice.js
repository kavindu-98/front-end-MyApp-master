import { createSlice } from "@reduxjs/toolkit";
export const mapSlice = createSlice({
  name: "map",
  initialState: {
    latitude:'',
    longitude:'',
    address:'',
    name:''
  },

  reducers: {
    addOrigin: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.address = action.payload.address;
      state.name = action.payload.name;
    
      
    },
    destination: (state, action) => {
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
        state.address = action.payload.address;
        state.name = action.payload.name;
      },
    },
  });
  export const { addOrigin, destination } = mapSlice.actions;
  
  export default mapSlice.reducer;