import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MidImage from './components/midImage';
import NavBar from './components/NavBar';
import AreaView from './pages/area-view';
import Home from './pages/home';
import { getLGA, getState } from './store/thunkReducers/locateThunk';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
        <Routes>
          <Route path='/view/:type' element={<div><AreaView /></div>}></Route>
        </Routes>
        <Routes>
          <Route path='/find/:id' element={<div><AreaView /></div>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;