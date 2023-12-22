import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "./rockets/rocketsSlice";
import dragonsSlice from "./dragons/dragonsSlice";
import missionsSlice from "./missions/missionsSlice";

export const store = configureStore({
  reducer:{
    rockets: rocketsSlice,
    dragons: dragonsSlice,
    missions: missionsSlice

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;