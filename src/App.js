
import './App.css';
import React from 'react';
import About from "./containers/About";
import Login from "./containers/Login";
import Home from './containers/Home/Home.jsx';
import Dashboard from './containers/Dashboard';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home/>} />
       <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;