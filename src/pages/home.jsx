import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StateCard from '../components/stateCard'
import { sLgaActions } from '../store/Slice/singleLGASlice';
import { getState } from '../store/thunkReducers/locateThunk';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getState());
    dispatch(sLgaActions.updateLGA({states: []}))
  }, [dispatch])
  
  const countries = useSelector(state => state.stateList)
  const stateList = countries.stateList;
  const stateLen = countries.stateList.length;


  return (
    <div className="home mt-5">
      <div className="h6 text-light text-center py-4 mb-5" >Countries of the World</div>
      {stateLen > 0 ?  <div className="grid-section pb-4 mt-3">
        {stateList.map(item =>(
          <StateCard
            key={item.iso3}
            name={item.name}
            lga ={(item.states).length}
            local = {item.states}
            type="nom"
          />
        ))}
      </div>
       : 
       <div className="text-center load pb-4">
            <img src="images/Load/1490.gif" alt="" />
            <p className='pb-5 text-light'>Loading data...</p>
        </div>  
        }
    </div>
  )
}

export default Home