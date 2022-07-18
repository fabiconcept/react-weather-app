/* It's importing the action from the reducer. */
import { singleWeatherAction } from "../Slice/singleWaether";
import { weatherAction } from "../Slice/weatherSlice";

/* The API url. */
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=eb2db56b2a114aeaba530010221407"

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


/**
 * It's an asynchronous function that fetches data from the url and returns the data in JSON format
 * @param q - The city name and the country code divided by a comma, use ISO 3166 country codes.
 * @returns The data is being returned.
 */
export const getForecast = (q) =>{
    console.log(q);
    const params = `&q=${q}&aqi=no`;
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

/**
 * It's an asynchronous function that fetches data from the url and returns the data in JSON format
 * @param q - The city name.
 * @returns The data is being returned.
 */
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