/* This is importing the useEffect, useDispatch, and Router, Route, and Routes components from the
react, react-redux, and react-router-dom packages. */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* This is importing the MidImage component from the midImage.js file in the components folder. */
import MidImage from './components/midImage';
/* This is importing the NavBar component from the navBar.js file in the components folder. */
import NavBar from './components/NavBar';
/* This is importing the AreaView component from the area-view.js file in the pages folder. */
import AreaView from './pages/area-view';
/* This is importing the Home component from the home.js file in the pages folder. */
import Home from './pages/home';
/* This is importing the getState function from the locateThunk file. */
import { getState } from './store/thunkReducers/locateThunk';

/**
 * The App function is a React component that renders the NavBar, MidImage, Home, and AreaView
 * components
 * @returns A Router component with a div with a NavBar, Home, and AreaView component.
 */
const App = () => {
  const dispatch = useDispatch();

  /* This is a React hook that is used to perform side effects in function components. */
  useEffect(() => {
    dispatch(getState());
  }, [dispatch])

  /* Returning a Router component with a div with a NavBar, Home, and AreaView component. */
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

/* Exporting the App component to be used in other files. */
export default App;