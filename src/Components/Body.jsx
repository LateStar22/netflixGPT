import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import Landingpage from './Landingpage';

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </Router>
  );
}

export default Body;
