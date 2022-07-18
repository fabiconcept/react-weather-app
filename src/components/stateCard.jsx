import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sLgaActions } from '../store/Slice/singleLGASlice'
import { getForecast } from '../store/thunkReducers/forecastThunk'

const StateCard = ({ name, lga, local, type}) => {
    const dispatch = useDispatch()

    let split_text = name.split(" ");

    const forecast = useSelector(state => state.weather.weather)
    let text = "";
    let isDay = 0;
    let temp_f = 0;
    let clouds = 0;
    let img = "";
    // let r = document.querySelector(':root')


    // const changeMode = (day) =>{
    //     if(day === 0){
    //         r.style.setProperty('--g-color', 'rgba(2, 1, 73, 0.1)');
    //         r.style.setProperty('--mid', 'linear-gradient(45deg, rgba(0, 1, 59, 0.392), rgba(2, 9, 37, 0.704))');
    //         r.style.setProperty('--back', '#002e53');
    //         r.style.setProperty('--text', '#fff');
    //         r.style.setProperty('--txt', '#fff');
    //     }else{
    //         r.style.setProperty('--txt', '#000');
    //         r.style.setProperty('--g-color', 'rgba(255, 255, 255, 0.1)');
    //         r.style.setProperty('--mid', 'linear-gradient(45deg, rgba(235, 235, 235, 0.392), rgba(31, 172, 253, 0.704))');
    //         r.style.setProperty('--back', '#64b5f6');
    //         r.style.setProperty('--text', 'rgb(59, 59, 59)');
    //     }
    // }


    forecast.forEach(element => {
        if(element.location.region === name || element.location.name === name || element.location.country === name || element.location.region === split_text[0]){
            text = element.current.condition.text
            isDay = element.current.is_day;
            temp_f = element.current.temp_f;
            clouds = element.current.cloud;
        }
    });

    switch(text){
        case "Mist":
            img = "mist"
            break;
        case "Fog":
            img = "fog"
            break;
        case "Sunny":
            if(isDay === 1){
                img = "clear-day"
            }else{
                img = "clear-night"
            }
            break;
        case "Moderate rain":
            img = "raindrop"
            break;
        case "Moderate or heavy rain shower":
            if(isDay === 1){
                img = "thunderstorms-day-rain"
            }else{
                img = "thunderstorms-night-rain"
            }
            break;
        case "Partly cloudy":
            if(isDay === 1){
                img = "partly-cloudy-day"
            }else{
                img = "partly-cloudy-night"
            }
            break;
        case "Cloudy":
            img = "cloudy"
            break;
        case "Clear":
            if(isDay === 1){
                img = "clear-day"
            }else{
                img = "clear-night"
            }
            break;
        case "Patchy rain possible":
            img = "drizzle"
            break;
        case "Light drizzle":
            img = "drizzle"
            break;
        case "Patchy light rain with thunder":
            if(isDay === 1){
                img = "thunderstorms"
            }else{
                img = "thunderstorms"
            }
            break;
        case "Light rain shower":
            if(isDay === 1){
                img = "partly-cloudy-day-rain"
            }else{
                img = "partly-cloudy-night-rain"
            }
            break;
        case "Overcast":
            img = "overcast"
            break;
        default:
            img = "not-available"
            break;
    }


    useEffect(()=>{
        dispatch(getForecast(name))    
    }, [name, dispatch])

    const setLocal = ()=>{
        dispatch(sLgaActions.updateLGA({states: local}))
    }

    return (
        <div className='hom'>
            <div className="grid-item">
            <img src={`images/all/${img}.svg`} alt="" />
                {type === "nom" ? <Link to={`/view/${name}`} onClick={setLocal} style = {{color: "#fff"}}><p style={{ textTransform: "capitalize" }}>{name}</p></Link> : <Link to={`/find/${name}`} style = {{color: "#fff"}}><p style={{ textTransform: "capitalize" }}>{name}</p></Link>}
                {text ? <p>{text}</p>  : <p>No weather data</p> }
                {type === "nom" && <Link to={`/view/${name}`} onClick={setLocal} style = {{color: "#fff"}}><p>States: {lga}</p></Link>}
            </div>


            {temp_f > 0 && <div className="balls">
                <div className="ball">{temp_f}</div>
                <div className="ball">{clouds}</div>
            </div>}
        </div>
    )
}

export default StateCard;