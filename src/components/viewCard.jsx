import React from 'react'
import { useParams } from 'react-router-dom';

const ViewCard = ({isLoad ,region, temp, text, wind_kph, feelslike_c, wind_dir, humidity, vis_miles, last_updated, isDay, country}) => {
    const {id, type} = useParams()
    let hour = new Date(last_updated).getHours()
    let min = new Date(last_updated).getMinutes()

    let q = "";

    if (id) {
        q = id;
    }else{
        q = type;
    }

    let data = `${hour}:${min}`;
    let img = "";
    let r = document.querySelector(':root')

    const changeMode = (day) =>{
        if(day === 0){
            r.style.setProperty('--g-color', 'rgba(2, 1, 73, 0.1)');
            r.style.setProperty('--mid', 'linear-gradient(45deg, rgba(0, 1, 59, 0.392), rgba(2, 9, 37, 0.704))');
            r.style.setProperty('--back', '#002e53');
            r.style.setProperty('--light', '#002e53');
            r.style.setProperty('--text', '#fff');
            r.style.setProperty('--txt', '#fff');
        }else{
            r.style.setProperty('--txt', '#000');
            r.style.setProperty('--light', 'rgba(255, 255, 255, .8)');
            r.style.setProperty('--g-color', 'rgba(255, 255, 255, 0.1)');
            r.style.setProperty('--mid', 'linear-gradient(45deg, rgba(235, 235, 235, 0.392), rgba(31, 172, 253, 0.704))');
            r.style.setProperty('--back', '#64b5f6');
            r.style.setProperty('--text', 'rgb(59, 59, 59)');
        }
    }

    switch(text){
        case "Mist":
            img = "mist";
            break;
        case "Fog":
            img = "fog";
            break;
        case "Sunny":
            if(isDay === 1){
                img = "clear-day";
            }else{
                img = "clear-night";
            }
            break;
        case "Moderate rain":
            img = "raindrop";
            break;
        case "Moderate or heavy rain shower":
            if(isDay === 1){
                img = "thunderstorms-day-rain";
            }else{
                img = "thunderstorms-night-rain";
            }
            break;
        case "Partly cloudy":
            if(isDay === 1){
                img = "partly-cloudy-day";
            }else{
                img = "partly-cloudy-night";
            }
            break;
        case "Cloudy":
            img = "cloudy";
            break;
        case "Clear":
            if(isDay === 1){
                img = "clear-day";
            }else{
                img = "clear-night";
            }
            break;
        case "Patchy rain possible":
            img = "drizzle";
            break;
        case "Light drizzle":
            img = "drizzle";
            break;
        case "Patchy light rain with thunder":
            if(isDay === 1){
                img = "thunderstorms";
            }else{
                img = "thunderstorms";
            }
            break;
        case "Light rain shower":
            if(isDay === 1){
                img = "partly-cloudy-day-rain";
            }else{
                img = "partly-cloudy-night-rain";
            }
            break;
        case "Overcast":
            img = "overcast";
            break;
        default:
            img = "not-available";
            break;
    }
    
    changeMode(isDay)

    return (
        <div>
            {region !== '' && <div className="vCard pb-5">
                <div className="details">
                    <div className="grid-item-main">
                        <p className="" style={{ fontSize: "3rem", fontWeight: "600" }}>{temp}°C</p>
                        <p><span style={{fontWeight: "600"}}>Region</span>: {region}, {country}</p>
                    </div>
                    <div className="grid-item-ad">
                        <p className="h6">{text}</p>
                        <p className='h6'>{isDay>0 ? "Day" : "Night"}</p>
                    </div>
                    <div className="Current">
                        <div className="top" style={{color: "var(--txt)"}}>Current Conditions</div>
                        <div className="icons">
                            <div className="feel">
                                <p className="h4 pt-3">{feelslike_c}°</p>
                                feels Like
                            </div>
                            <div className="feel">
                                <p className="h4 pt-3">{wind_kph} kph</p>
                                Wind Kph
                            </div>
                            <div className="feel">
                                <p className="h4 pt-3">{wind_dir}</p>
                                wind dr
                            </div>
                            <div className="feel">
                                <p className="h4 pt-3">{humidity}%</p>
                                Relative Humidity
                            </div>
                            <div className="feel">
                                <p className="h4 pt-3">{vis_miles} miles</p>
                                Visibility
                            </div>
                            <div className="feel">
                                <p className="h4 pt-3">{data}</p>
                                Time
                            </div>
                        </div>
                    </div>

                </div>
                <div className="vIcon">
                    <div className="state text-light mt-2">{q}</div>
                    <img src={`../images/all/cloudy.svg`} alt="" />
                    <img src={`../images/all/cloudy.svg`} alt="" />
                    <img src={`../images/all/${img}.svg`} alt="" />
                </div>
            </div>}
            {region === '' && <div className='text-center'>
                <img src={`../images/vaw.png`} alt="" />
                <h1 className='text-light py-5'>Comrade! <br /> where you go?</h1>
                <p className="mt-4 text-light">Sorry! Location Not Found</p>
            </div> }
        </div>
    )
}

export default ViewCard