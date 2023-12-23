


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import MissionType from "../../types/mission";

interface missionState {
  missions: MissionType[],
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string | null | undefined
}

const initialState = {
  missions: [],
  status: 'idle',
  error: null
} as missionState;

const MISSION_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'dragons/fetchMissions',
  async () =>{
    const response = await axios.get(MISSION_URL);
    return response.data;
  }
)

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchMissions.pending, (state)=>{
      state.status = 'pending'
    }).addCase(fetchMissions.fulfilled, (state, action)=>{
      state.status = 'succeeded';
      state.missions = action.payload;
    }).addCase(fetchMissions.rejected, (state, action)=>{
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export default missionSlice.reducer;