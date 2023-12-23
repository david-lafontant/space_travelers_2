import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

interface rocketState {
  rockets: []
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | null | undefined
}


 const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
 } as rocketState;

 const ROCKET_URL = 'https://api.spacexdata.com/v4/rockets';

 export const fetchRockets = createAsyncThunk(
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
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.status = 'pending';
    }).addCase(fetchRockets.fulfilled, (state, action) => {
           state.status = 'succeeded';
    state.rockets = action.payload;
    
    }).addCase(fetchRockets.rejected, (state, action)=>{
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
 });

 export default rocketSlice.reducer;