import { configureStore } from "@reduxjs/toolkit";
import { locationSlice } from "./Slice/locationSlice";
import { weatherSlice } from "./Slice/weatherSlice";

const store = configureStore({
    reducer: {location: locationSlice.reducer, weather: weatherSlice.reducer}
})

export default store;