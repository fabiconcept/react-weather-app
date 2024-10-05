/* It's importing the action from the reducer. */
import { singleWeatherAction } from "../Slice/singleWaether";
import { weatherAction } from "../Slice/weatherSlice";

/* The API url. */
const apiKey = process.env.REACT_APP_WEATHER_KEY;
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}`

/**
 * It's an async function that fetches data from an API, then dispatches the data to the reducer.
 * @param q - city name and country code divided by comma, use ISO 3166 country codes
 * @returns {
 *   "response": {
 *     "cod": "200",
 *     "message": 0.0034,
 *     "cnt": 40,
 *     "list": [
 *       {
 *         "dt": 1579057600,
 *         "main": {
 *           "temp": -0.01,
 *           "feels_like": -
 */


export const getForecast = (q,c) =>{
    const params = `&q=${q} ${c}&aqi=no`;
    const url = `${apiUrl} ${params}`;

    return async(dispatch) =>{
        /**
         * The fetchData function is an asynchronous function that fetches data from the url and
         * returns the data in JSON format.
         * @returns The data is being returned.
         */
        const fetchData = async() =>{
            const res = await fetch(url);
            const data = res.json();

            return data;
        }

        /* It's a try catch block. */
        try {
            const response = await fetchData();
            dispatch(weatherAction.addWeather({weather: response}))
        } catch (error) {
            console.log({errorForecast: error.message})
        }
    }
}

export const getSingleForecast = (q) =>{
    const params = `&q=${q} Nigeria&aqi=no`;
    const url = `${apiUrl} ${params}`;

    return async(dispatch) =>{
        /**
         * The fetchData function is an asynchronous function that fetches data from the url and
         * returns the data in JSON format.
         * @returns The data is being returned.
         */
        const fetchData = async() =>{
            const res = await fetch(url);
            const data = res.json();

            return data;
        }

        /* It's a try catch block. */
        try {
            const response = await fetchData();
            dispatch(singleWeatherAction.addWeather({weather: response}))
        } catch (error) {
            console.log({errorForecast: error.message})
        }
    }
}