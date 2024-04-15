import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./citySlice";
import weatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    cities: cityReducer,
    weather:weatherSlice
    // Add more reducers here if needed
  },
});

export default store;