import { configureStore } from "@reduxjs/toolkit";
import { lgaSlice } from "./Slice/lgaSlice";
import { sLgaSlice } from "./Slice/singleLGASlice";
import { singleWeatherSlice } from "./Slice/singleWaether";
import { stateSlice } from "./Slice/stateSlice";
import { weatherSlice } from "./Slice/weatherSlice";

const store = configureStore({
    reducer: {stateList: stateSlice.reducer, lga: lgaSlice.reducer, weather: weatherSlice.reducer, single: singleWeatherSlice.reducer, sLga: sLgaSlice.reducer}
});
export default store;