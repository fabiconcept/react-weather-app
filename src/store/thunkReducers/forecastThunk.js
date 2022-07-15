import { weatherAction } from "../Slice/weatherSlice";

const apiUrl = "http://api.weatherapi.com/v1/current.json?key=eb2db56b2a114aeaba530010221407"

export const getForecast = (q) =>{
    const params = `&q=${q}&aqi=no`;
    const url = `${apiUrl} ${params}`;

    return async(dispatch) =>{
        const fetchData = async() =>{
            const res = await fetch(url);
            const data = res.json();

            return data;
        }

        try {
            const response = await fetchData();
            dispatch(weatherAction.addWeather({weather: {
                lat: response.location.lat,
                lon: response.location.lon,
                lon: response.location.lon,
                localTime: response.location.localtime,
                condition: response.current.condition.text
            }}))
        } catch (error) {
            console.log({errorForecast: error.message})
        }
    }
}