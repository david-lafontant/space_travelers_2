import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "./rockets/rocketsSlice";
import dragonsSlice from "./dragons/dragonsSlice";

export const store = configureStore({
  reducer:{
    rockets: rocketsSlice,
    dragons: dragonsSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;