import React from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from '../componentes/landingPage/landingPage';
import Home from '../componentes/Home/Home';
import About from '../componentes/About/About';
import CreateAc from "../componentes/createActivity/createActivity"
import Detail from '../componentes/detailCountry/detailCountry';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/create" element={<CreateAc/>} />
        <Route path="/countries/:id" element={<Detail/>} />
      </Routes >
    </div>
  )
}

export default App;
