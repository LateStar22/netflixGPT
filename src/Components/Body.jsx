import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { useAction } from '../Contexts/actionContext';
import Browse from './Browse';
import Login from './Login';
import Landingpage from './Landingpage';

const Body = () => {

  const { action } = useAction();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/browse' element={action === "Sign Up" ? <Browse /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default Body;
