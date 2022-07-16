import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import StateCard from '../components/stateCard';
import ViewCard from '../components/viewCard';
import { getSingleForecast } from '../store/thunkReducers/forecastThunk';

const AreaView = () => {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  let q = "";

  if (id) {
    q = id;
  }else{
    q = type;
  }

  useEffect(() => {
    dispatch(getSingleForecast(q))
  }, [q])

  const [region, setRegion] = useState('');
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');
  const [temp, settemp] = useState(0);
  const [feelslike_c, setFeelslike_c] = useState('');
  const [wind_dir, setWind_dir] = useState('');
  const [wind_kph, setWind_kph] = useState('');
  const [humidity, setHumidity] = useState('');
  const [vis_miles, setVis_miles] = useState('');
  const [last_updated, setLast_updated] = useState('');
  const [isDay, setIsday] = useState('');
  const [country, setCountry] = useState('');
  let isLoad = false;

  const forecast = useSelector(state => state.single.weather)

  const localLGA = useSelector(state=> state.sLga.lgas)

  // const watch = useSelector(state => state.single.weather)

  useEffect(()=>{
    setNum(num + 1)
    if(num > 2){
      
    }
  },[forecast])

  function setData() {
    setRegion(forecast.location.region);
    setCountry(forecast.location.country);
    setText(forecast.current.condition.text);
    settemp(forecast.current.temp_f);
    setFeelslike_c(forecast.current.feelslike_c);
    setWind_kph(forecast.current.wind_kph);
    setWind_dir(forecast.current.wind_dir);
    setHumidity(forecast.current.humidity);
    setVis_miles(forecast.current.vis_miles);
    setLast_updated(forecast.current.last_updated);
    setIsday(forecast.current.is_day);
    isLoad= true;
  }

  setTimeout(() => {
    setData()
  }, 500);


  
  // console.log(forecast)
  
  

  return (
    <div className="area py-3">
      <div className={`mainCard ${id ? 'py-5': ""}`}>
        <ViewCard
          region= {region}
          temp={temp}
          text={text}
          feelslike_c={feelslike_c}
          wind_kph={wind_kph}
          wind_dir={wind_dir}
          humidity={humidity}
          vis_miles={vis_miles}
          last_updated={last_updated}
          isDay={isDay}
          country={country}
          isLoad = {isLoad}
        />
      </div>
      {type &&<div>
        <p className="h2 text-center text-light">Local Goverment Areas</p>
        <div className="grid-section pb-4 mt-3">
          {localLGA.map(item => (
            <StateCard
              key={item}
              name={item}
              type="ab"
            />
          ))}
        </div>
      </div>
      }
    </div>
  )
}

export default AreaView