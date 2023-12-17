import { createSlice } from "@reduxjs/toolkit";

 const initialState = {};

 const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: () => {},
 });

 export default rocketSlice.reducer;