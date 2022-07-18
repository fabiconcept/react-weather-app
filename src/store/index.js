/* Importing the configureStore function from the reduxjs/toolkit package. */
import { configureStore } from "@reduxjs/toolkit";

/* Importing the reducers from the Slice folder. */
import { lgaSlice } from "./Slice/lgaSlice";
import { sLgaSlice } from "./Slice/singleLGASlice";
import { singleWeatherSlice } from "./Slice/singleWaether";
import { stateSlice } from "./Slice/stateSlice";
import { weatherSlice } from "./Slice/weatherSlice";

/* Creating a store object that will be used to store the state of the application. */
const store = configureStore({
    reducer: {stateList: stateSlice.reducer, lga: lgaSlice.reducer, weather: weatherSlice.reducer, single: singleWeatherSlice.reducer, sLga: sLgaSlice.reducer}
});

/* Exporting the store object. */
export default store;