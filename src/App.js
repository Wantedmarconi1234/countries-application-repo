import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout';
import CountryDetails from './components/countryDetails';
import HomePage from './components/HomePage';
import ErrorPage from './components/error';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/details/:country' element={<CountryDetails/>}/>
        </Route> 
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
