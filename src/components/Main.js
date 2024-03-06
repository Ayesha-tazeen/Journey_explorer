

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
import About from './AboutPage/About';
import Destination from "./Destinations/Destination"
import Booking from './Booking/Booking';
import TrainBooking from './Booking/TrainBooking/TrainBooking'; 
import FlightBooking from './Booking/FlightBooking/FlightBooking'; 


const Main = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/destinations' element={<Destination />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} /> 
        <Route path='/booking/train' element={<TrainBooking />} /> 
        <Route path='/booking/flight' element={<FlightBooking />} /> 
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default Main;
