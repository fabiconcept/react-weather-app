import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getForecast } from '../store/thunkReducers/forecastThunk'

const StateCard = ({ name, capital, id }) => {
    const dispatch = useDispatch()
    
    const lgasList = useSelector(state => state.location.lgas);
    const lga = lgasList[id].lgas;

    console.log({id, lgasList, lga})
    // const weather = useSelector(state => state.weather.weather);
    // console.log(weather)

    // useEffect(()=>{
    //     if(lga.length > 0){
    //         dispatch(getForecast(name))
    //     }
    // }, [lga])
    

    return (
        <Link className='hom' to={`/state/${name}`}>
            <div className="grid-item">
            <img src="images/all/sunrise.svg" alt="" />
                <p className="h6" style={{ textTransform: "capitalize" }}>{name} state</p>
                <p>{capital}</p>
                <p>LGA: {lga.length}</p>
            </div>

            <div className="balls">
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </Link>
    )
}

export default StateCard;