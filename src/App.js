import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import MidImage from './components/midImage';
import NavBar from './components/NavBar';
import AreaView from './pages/area-view';
import Home from './pages/home';
import {getLGA, getState } from './store/thunkReducers/locateThunk';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getState());
    dispatch(getLGA());
  }, [])
  
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path='/' element={<div><MidImage /><Home /></div>}></Route>
        </Routes>
        {/* <Routes>
          <Route path='/state' element={<div><AreaView /></div>}></Route>
        </Routes> */}
      </div>
    </Router>
  )
}

export default App;