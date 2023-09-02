import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout';
import CountryDetails from './components/countryDetails';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/details/:country' element={<CountryDetails/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
