import React from 'react';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomeScreen from './Screen/HomeScreen';


import Login from './Screen/Login'
import Register from './Screen/Register'
import RegisterCompany from './Screen/register-company'

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/home" element={ <HomeScreen/> } />
      <Route path="/register-company" element={ <RegisterCompany/> } />
      </Routes>
    </Router>
  );
}

export default App;
