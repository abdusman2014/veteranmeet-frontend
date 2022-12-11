import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import Navbar from "./Navigation";
import ProfileScreen from "./Screen/ProfileScreen/ProfileScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<HomeScreen />} />
        <Route path='/home'  element={<HomeScreen />} />
        <Route path='/Profile'  element={<ProfileScreen />} />
        {/* <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Routes>
    </Router>
    // <div>
    //   <HomeScreen />
    // </div>
  );
}

export default App;
