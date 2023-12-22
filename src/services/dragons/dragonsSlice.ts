import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface dragonState {
  dragons: [],
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | null | undefined
}

const initialState = {
  dragons: [],
  status: 'idle',
  error: null
} as dragonState;

const DRAGON_URL = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () =>{
    const response = await axios.get(DRAGON_URL);
    return response.data;
  }
)

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchDragons.pending, (state)=>{
      state.status = 'pending'
    }).addCase(fetchDragons.fulfilled, (state, action)=>{
      state.status = 'succeeded';
      state.dragons = action.payload;
    }).addCase(fetchDragons.rejected, (state, action)=>{
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export default dragonSlice.reducer;