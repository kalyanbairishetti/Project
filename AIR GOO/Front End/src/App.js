 import React from 'react';   
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from './components/Contactus';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FlightDetails from './components/FlightDetails';
import Admin from "./admin/admin";
import button from "../src/components/Home";



function App() {
  return (
    <div className='background'>
      <BrowserRouter>
       <Navbar />
       
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/About" element={<About />} />
          <Route path="/FlightDetails" element={<FlightDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin" element={<button />} />
          

        </Routes>
     
      </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
