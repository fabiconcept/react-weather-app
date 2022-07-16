import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StateCard from '../components/stateCard'
import { getLGA, getState } from '../store/thunkReducers/locateThunk';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getState());
    dispatch(getLGA());
  }, [])
  
  const lga = useSelector(state => state.lga)
  const lgaLen =(lga.lgaList).length;

  let id = 0;



  return (
    <div className="home mt-5">
      {/* <div className="h6 text-light text-center py-4 mb-5" >State / Province</div> */}
      {lgaLen > 0 ?  <div className="grid-section pb-4 mt-3">
        {lga.lgaList.map(item =>(
          <StateCard
            key={item.alias}
            name={item.state}
            lga ={(item.lgas).length}
            local = {item.lgas}
            type="nom"
          />
        ))}
      </div>
       : <p className='text-center pb-5 text-light'>Loading Resource...</p> }
    </div>
  )
}

export default Home