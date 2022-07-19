import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StateCard from '../components/stateCard'
import { sLgaActions } from '../store/Slice/singleLGASlice';
import { getState } from '../store/thunkReducers/locateThunk';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getState());
    dispatch(sLgaActions.updateLGA({states: []}))
  }, [dispatch])

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

  changeMode(1)
  
  const countries = useSelector(state => state.stateList)
  const stateList = countries.stateList;
  const stateLen = countries.stateList.length;


  return (
    <div className="home mt-5">
      <ScrollToTop smooth component={"Top"} style={{zIndex: "5000"}}/>
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