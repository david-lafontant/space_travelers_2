import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

 const initialState = {};
 const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

 CONST fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(ROCKET_URL);
    return response.data
  }
 )

 const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: () => {},
 });

 export default rocketSlice.reducer;