/* This is importing the useEffect, useState, useDispatch, useSelector and useParams hooks from the
react and react-router-dom libraries. */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StateCard from '../components/stateCard';
/* Importing the viewCard component and the getSingleForecast function from the forecastThunk file. */
import ViewCard from '../components/viewCard';
import { getSingleForecast } from '../store/thunkReducers/forecastThunk';
import ScrollToTop from 'react-scroll-to-top';

const AreaView = () => {
  /* This is destructuring the useParams hook. */
  const { id, type } = useParams();
  const dispatch = useDispatch();
  let q = "";

  /* This is a ternary operator. It is a shorthand way of writing an if/else statement. */
  if (id) {
    q = id;
  }else{
    q = type;
  }

  useEffect(() => {
    dispatch(getSingleForecast(`${q}`))
  }, [q, dispatch])
 
  const [region, setRegion] = useState('');
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
  const localStates = useSelector(state => state.sLga.states)

  function setData() {
    if(forecast.location.region){
      setRegion(forecast.location.region);
    }else{
      setRegion("");
    }
    window.scrollTo(0,0);
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

  return (
    <div className="area py-3">
      <ScrollToTop smooth component={"Top"} style={{zIndex: "5000"}}/>
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

      {type && localStates &&<div>
        <p className="h2 text-center text-light">Local Goverment Areas</p>
        <div className="grid-section pb-4 mt-3">
          {localStates.map(item => (
            <StateCard
              key={item.state_code}
              name={item.name}
              type="ab"
            />
          ))}
        </div>
      </div>
      }
    </div>
  )
}

export default AreaView;