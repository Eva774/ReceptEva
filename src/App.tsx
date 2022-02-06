import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Navbar from "./components/index";

import Home from "./pages/home";
import ShowRecipe from "./pages/ShowRecipe";

export default class App extends React.Component <{},{}> {


render(){
  


return (
  <Router>
  <Navbar />
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/Showrecipe" element={<ShowRecipe/>}/>
  </Routes>
  </Router>
);
  }
}
